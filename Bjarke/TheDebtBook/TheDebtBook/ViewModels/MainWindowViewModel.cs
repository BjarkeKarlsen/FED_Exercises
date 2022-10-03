using Prism.Mvvm;
using Prism.Commands;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using TheDebtBook.Models;
using TheDebtBook.Views;

namespace TheDebtBook.ViewModels
{
    public class MainWindowViewModel : BindableBase
    {

        public MainWindowViewModel() {
            Accounts = new ObservableCollection<Account>();
            Accounts.Add(new Account("1", "Duwe", 200));
            Accounts.Add(new Account("2", "Myt", -40));
            Accounts.Add(new Account("3", "Martin", 3200));
            CurrentAccount = Accounts[0];
        }

        #region Propeties
        private Account currentAccount;
        public Account CurrentAccount { get { return currentAccount; } set { SetProperty(ref currentAccount, value); } }

        private ObservableCollection<Account> _accounts;
        public ObservableCollection<Account> Accounts { get { return _accounts; }  set { SetProperty(ref _accounts, value); } }

        private int _currentIndex;
        public int CurrentIndex { get { return _currentIndex; } set { SetProperty(ref _currentIndex, value); } }

        private bool _dirty = false;
        public bool Dirty { get { return _dirty; } set { SetProperty(ref _dirty, value);  RaisePropertyChanged("Title"); } }
        #endregion

        #region Methods

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
            .ObservesProperty(() => CurrentIndex)) ;

        private void ExecuteEditCommand()
        {
            var tempAccount = CurrentAccount.Clone();
            var viewModel = new AccountViewModel("Edit account", tempAccount) { };

            var dlg = new EditAccountView
            {
                DataContext = viewModel,
                Owner = Application.Current.MainWindow
            };

            if (dlg.ShowDialog() == true ) 
            {

            }

        }

        private bool CanExecuteEditCommand() { return CurrentIndex >= 0; }

        #endregion
    }
}

