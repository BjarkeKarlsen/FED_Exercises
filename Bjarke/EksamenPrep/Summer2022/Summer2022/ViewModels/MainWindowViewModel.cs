using Microsoft.Win32;
using Prism.Commands;
using Prism.Mvvm;
using Summer2022.Data;
using Summer2022.Models;
using Summer2022.Views;
using System;
using System.Collections.ObjectModel;
using System.IO;
using System.Windows;

namespace Summer2022.ViewModels;

public class MainWindowViewModel : BindableBase
{
    public MainWindowViewModel()
    {
        PackingLists = new();
        PersonalPackingLists = new();
        var pack = new PackingList("1", "Ferie");
        //var item = new Item("1", "testc", 2);
        //pack.Items.Add(item);
        PackingLists.Add(pack);
        CurrentPackingList = PackingLists[0];
    }

    #region Propeties
    private PackingList _currentPackingList;
    private ObservableCollection<PackingList> _packingLists;
    private ObservableCollection<PackingList> _personalpackingLists;
    private int _currentIndex;
    private string _packingListName;
    private string _filePath = "";
    private string _fileName = "No file loaded";
    public PackingList CurrentPackingList {   get => _currentPackingList;   set => SetProperty(ref _currentPackingList, value);   }
    public ObservableCollection<PackingList> PackingLists { get => _packingLists; set => SetProperty(ref _packingLists, value); }
    public ObservableCollection<PackingList> PersonalPackingLists { get => _personalpackingLists; set => SetProperty(ref _personalpackingLists, value); }
    public int CurrentIndex { get => _currentIndex;  set => SetProperty(ref _currentIndex, value); }
    public string FileName { get => _fileName;  set => SetProperty(ref _fileName, value); } 
    public string PackingListName { get => _packingListName; set { SetProperty(ref _packingListName, value); RaisePropertyChanged("Title"); } }
    #endregion

    #region Commands
    private DelegateCommand _createPackingListCommand;
    public DelegateCommand CreatePackingListCommand => _createPackingListCommand ??= new DelegateCommand(ExecuteCreatePackingListCommand);
    private void ExecuteCreatePackingListCommand()
    {
        if (string.IsNullOrEmpty(PackingListName))
            return;
        // Create new packing list
        var packingList = new PackingList();
        packingList.Id = (PackingLists.Count + 1).ToString();
        packingList.Name = PackingListName;
  
        PackingLists.Add(packingList);
    }

    private DelegateCommand _editPackingListCommand;
    public DelegateCommand EditPackingListCommand => _editPackingListCommand ??= new DelegateCommand(ExecuteEditPackingListCommand);
    private void ExecuteEditPackingListCommand() {
        // Create new view and viewmodel for CreatePackageList
        var viewModel = new CreatePackageListViewModel("Create a new packinglist", CurrentPackingList);
        var dlg = new CreatePackageListView { DataContext = viewModel };

        if (dlg.ShowDialog() != true)
            return;
    }

    private DelegateCommand _addToPersonalCommand;

    public DelegateCommand AddToPersonalCommand => _addToPersonalCommand ??= new DelegateCommand(ExecuteAddToPersonalCommand);
    private void ExecuteAddToPersonalCommand() {
        if (PersonalPackingLists.Contains(CurrentPackingList) && CurrentPackingList != null)
            return;
     
        PersonalPackingLists.Add(CurrentPackingList.Clone());
    }

    private DelegateCommand _openPersonalCommand;
    public DelegateCommand OpenPersonalCommand => _openPersonalCommand ??= new DelegateCommand(ExecuteOpenPersonalCommand, CanExecuteOpenPersonalCommand).
        ObservesProperty(() => CurrentIndex);

    private void ExecuteOpenPersonalCommand() {
        //var tempPackingList = CurrentPackingList.Clone();
        var viewModel = new PersonalPackageListViewModel("Make a new specifik packing list", CurrentPackingList) { };
        var dlg = new PersonalPackageListView { DataContext = viewModel };

        if (dlg.ShowDialog() != true)
            return;
    }
    private bool CanExecuteOpenPersonalCommand()
    {
        return CurrentIndex >= 0;
    }



    private bool CanExecuteEditCommand() { return CurrentIndex >= 0; }
    DelegateCommand _NewFileCommand;
    public DelegateCommand NewFileCommand {
        get { return _NewFileCommand = new DelegateCommand(NewFileCommand_Execute); }
    }

    private void NewFileCommand_Execute() {
        MessageBoxResult res = MessageBox.Show("Any unsaved data will be lost. Are you sure you want to initiate a new file?", "Warning",
            MessageBoxButton.YesNo, MessageBoxImage.Question, MessageBoxResult.No);
        if (res == MessageBoxResult.Yes) {
            PackingLists.Clear();
            PersonalPackingLists.Clear();
            FileName = "";
        }
    }

    DelegateCommand _OpenFileCommand;
    public DelegateCommand OpenFileCommand {
        get { return _OpenFileCommand = new DelegateCommand(OpenFileCommand_Execute); }
    }

    private void OpenFileCommand_Execute() {
        var dialog = new OpenFileDialog
        {
            Filter = "PackingList documents|*.dbt|All Files|*.*",
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
            PackingLists = Repository.ReadFile(_filePath);
        }
        catch (Exception ex) {
            MessageBox.Show(ex.Message, "Unable to open file", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }

    DelegateCommand _SaveAsCommand;
    public DelegateCommand SaveAsCommand {
        get { return _SaveAsCommand ?? (_SaveAsCommand = new DelegateCommand(SaveAsCommand_Execute)); }
    }

    private void SaveAsCommand_Execute() {
        var dialog = new SaveFileDialog
        {
            Filter = "Account documents|*.dbt|All Files|*.*",
            DefaultExt = "dbt"
        };
        if (_filePath == "")
            dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
        else
            dialog.InitialDirectory = Path.GetDirectoryName(_filePath);

        if (dialog.ShowDialog(Application.Current.MainWindow) == true) {
            _filePath = dialog.FileName;
            FileName = Path.GetFileName(_filePath);
            SaveFile();
        }
    }

    DelegateCommand _SaveCommand;
    public DelegateCommand SaveCommand => _SaveCommand ??= new DelegateCommand(SaveFileCommand_Execute, SaveFileCommand_CanExecute)
              .ObservesProperty(() => PackingLists.Count);

    private void SaveFileCommand_Execute() {
        SaveFile();
    }

    private bool SaveFileCommand_CanExecute() {
        return FileName != "" && PackingLists.Count > 0;
    }

    private void SaveFile() {
        try {
            Repository.SaveFile(_filePath, PackingLists);
        }
        catch (Exception ex) {
            MessageBox.Show(ex.Message, "Unable to save file", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }
    #endregion
}
