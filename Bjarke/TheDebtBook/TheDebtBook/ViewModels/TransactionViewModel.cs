using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Prism.Commands;
using Prism.Mvvm;
using TheDebtBook.Models;
using TheDebtBook.Views;

namespace TheDebtBook.ViewModels
{
    public class TransactionViewModel : BindableBase
    {

        public TransactionViewModel(string title, Account account)
        {
            Titel = title;
            CurrentAccount = account;
            Transactions = new ObservableCollection<Transaction>();
            CurrentTransaction = new Transaction();

        }

        #region Properties

        string _title;
        Account _currentAccount;
        Transaction _currentTransaction;
        ObservableCollection<Transaction> _transactions;

        public string Titel { get { return _title; } set { SetProperty(ref _title, value); } }
        public Account CurrentAccount
        {
            get { return _currentAccount; }
            set { SetProperty(ref _currentAccount, value); }
        }

        public bool IsValid
        {
            get
            {
                if (CurrentTransaction.Amount == null)

                    return false;
                else
                    return true;
            }
        }

        public ObservableCollection<Transaction> Transactions
        {
            get { return _transactions; }
            set { SetProperty(ref _transactions, value); }
        }

        public Transaction CurrentTransaction
        {
            get { return _currentTransaction; }
            set { SetProperty(ref _currentTransaction, value); }
        }

        #endregion


        #region Methods

        //public void AddNewTransaction()
        //{

        //    _currentAccount.Transaction.Add(new Transaction(CurrentTransaction.Amount));
        //    UpdateBalance();
        //}

        //private void UpdateBalance()
        //{
        //    _currentAccount.Money += _currentTransaction.Amount;
        //}
        #endregion

        #region Commands

        private DelegateCommand addValuebtnCommand;
        public DelegateCommand AddValuebtnCommand =>
            addValuebtnCommand ?? (addValuebtnCommand = new DelegateCommand(
                ExecuteAddValuebtnCommand, CanExecuteAddValuebtnCommand));

        private void ExecuteAddValuebtnCommand()
        {
        }

        private bool CanExecuteAddValuebtnCommand()
        {
            return IsValid;
        }

        #endregion
    }


}
