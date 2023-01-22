using Prism.Mvvm;
using Prism.Commands;
using System;
using System.Collections.ObjectModel;
using System.Windows;
using TheDebtBook.Models;
using TheDebtBook.Views;
using Microsoft.Win32;
using System.IO;
using TheDebtBook.Data;

namespace TheDebtBook.ViewModels;

public class MainWindowViewModel : BindableBase
{

    public MainWindowViewModel()
    {
        Accounts = new ObservableCollection<Account>();
        Accounts.Add(new Account("1", "Duwe", 9000));
        Accounts.Add(new Account("2", "Myt", -69));
        Accounts.Add(new Account("3", "Martin", 4200));
        CurrentAccount = Accounts[0];
    }

    #region Propeties

    private string _filePath = "";
    private string _fileName = "No file loaded";

    private Account currentAccount;
    public Account CurrentAccount { get { return currentAccount; } set { SetProperty(ref currentAccount, value); } }

    private ObservableCollection<Account> _accounts;
    public ObservableCollection<Account> Accounts { get { return _accounts; } set { SetProperty(ref _accounts, value); } }

    private int _currentIndex;
    public int CurrentIndex { get { return _currentIndex; } set { SetProperty(ref _currentIndex, value); } }

    private bool _dirty = false;
    public bool Dirty { get { return _dirty; } set { SetProperty(ref _dirty, value); RaisePropertyChanged("Title"); } }

    public string FileName
    {
        get { return _fileName; }
        set
        {
            SetProperty(ref _fileName, value);
            RaisePropertyChanged("Title");
        }
    }


    #endregion



    #region Commands



    private DelegateCommand _addCommand;
    public DelegateCommand AddCommand =>
        _addCommand ?? (_addCommand = new DelegateCommand(ExecuteAddCommand));

    private void ExecuteAddCommand()
    {
        var newAccount = new Account();
        newAccount.Id = (Accounts.Count + 1).ToString();
        var viewModel = new AccountViewModel("Add new Account", newAccount);

        var dlg = new AccountView { DataContext = viewModel };
        if (dlg.ShowDialog() == true)
        {
            Accounts.Add(newAccount);
            CurrentAccount = newAccount;
            Dirty = true;
        }
    }

    private DelegateCommand _editCommand;
    public DelegateCommand EditCommand =>
        _editCommand ?? (_editCommand = new DelegateCommand(ExecuteEditCommand, CanExecuteEditCommand)
        .ObservesProperty(() => CurrentIndex));

    private void ExecuteEditCommand()
    {
        var tempAccount = CurrentAccount.Clone();
        var viewModel = new TransactionViewModel("Edit account", tempAccount) { };

        var dlg = new TransactionView
        {
            DataContext = viewModel,
            Owner = Application.Current.MainWindow
        };

        if (dlg.ShowDialog() != true)
        {
            CurrentAccount.Transaction = tempAccount.Transaction;
            tempAccount.CalculateMoney();
            currentAccount.Money = tempAccount.Money;
            //tempAccount.Transaction.Add(new Transaction(DateTime.Now.ToString(), 32));
            //CurrentAccount = tempAccount;
        }
    }


    private bool CanExecuteEditCommand() { return CurrentIndex >= 0; }
    DelegateCommand _NewFileCommand;
    public DelegateCommand NewFileCommand
    {
        get { return _NewFileCommand = new DelegateCommand(NewFileCommand_Execute); }
    }

    private void NewFileCommand_Execute()
    {
        MessageBoxResult res = MessageBox.Show("Any unsaved data will be lost. Are you sure you want to initiate a new file?", "Warning",
            MessageBoxButton.YesNo, MessageBoxImage.Question, MessageBoxResult.No);
        if (res == MessageBoxResult.Yes)
        {
            Accounts.Clear();
            FileName = "";

        }
    }

    DelegateCommand _OpenFileCommand;
    public DelegateCommand OpenFileCommand
    {
        get { return _OpenFileCommand = new DelegateCommand(OpenFileCommand_Execute); }
    }

    private void OpenFileCommand_Execute() {
        var dialog = new OpenFileDialog
        {
            Filter = "Account documents|*.dbt|All Files|*.*",
            DefaultExt = "dbt"
        };
        if (_filePath != "")
            dialog.InitialDirectory = Path.GetDirectoryName(_filePath);
        else
            dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

        if (dialog.ShowDialog(Application.Current.MainWindow) != true) {
            return;
        }
        _filePath = dialog.FileName;
        FileName = Path.GetFileName(_filePath);
        try {
            Accounts = Repository.ReadFile(_filePath);
        }
        catch (Exception ex) {
            MessageBox.Show(ex.Message, "Unable to open file", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }

    DelegateCommand _SaveAsCommand;
    public DelegateCommand SaveAsCommand
    {
        get { return _SaveAsCommand ?? (_SaveAsCommand = new DelegateCommand(SaveAsCommand_Execute)); }
    }

    private void SaveAsCommand_Execute()
    {
        var dialog = new SaveFileDialog
        {
            Filter = "Account documents|*.dbt|All Files|*.*",
            DefaultExt = "dbt"
        };
        if (_filePath == "")
            dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
        else
            dialog.InitialDirectory = Path.GetDirectoryName(_filePath);

        if (dialog.ShowDialog(Application.Current.MainWindow) == true)
        {
            _filePath = dialog.FileName;
            FileName = Path.GetFileName(_filePath);
            SaveFile();
        }
    }

    DelegateCommand _SaveCommand;
    public DelegateCommand SaveCommand
    {
        get
        {
            return _SaveCommand ?? (_SaveCommand = new DelegateCommand(SaveFileCommand_Execute, SaveFileCommand_CanExecute)
              .ObservesProperty(() => Accounts.Count));
        }
    }

    private void SaveFileCommand_Execute()
    {
        SaveFile();
    }

    private bool SaveFileCommand_CanExecute()
    {
        return FileName != "" && Accounts.Count > 0;
    }

    private void SaveFile()
    {
        try
        {
            Repository.SaveFile(_filePath, Accounts);
        }
        catch (Exception ex)
        {
            MessageBox.Show(ex.Message, "Unable to save file", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }



    #endregion
}

