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


namespace TheDebtBook.ViewModels
{
    public class MainWindowViewModel : BindableBase
    {

        public MainWindowViewModel() {

        }

        #region Propeties
        private Account currentAccount;
        public Account CurrentAccount { get { return currentAccount; } set { SetProperty(ref currentAccount, value); } }

        private ObservableCollection<Account> _accounts;
        public ObservableCollection<Account> Accounts { get { return _accounts; }  set { SetProperty(ref _accounts, value); } }

        private int _currentIndex;
        public int CurrentIndex { get { return _currentIndex; } set { SetProperty(ref _currentIndex, value); } }
        #endregion

        #region Methods

        #endregion

        #region Commands

        private Delegate _editCommand;
        public Delegate EditCommand => 
            _editCommand ?? (_editCommand = new Delegate(ExecuteEditCommand, CanExecuteEditCommand)
            .ObservesProperty(() => CurrentIndex)) ;

        private void ExecuteEditCommand() 
        {
            var tempAccount = CurrentAccount.Clone();
            var viewModel = new AccountViewModel("Edit account", tempAccount) { };

            var dlg = new AccountView
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

