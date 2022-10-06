using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Prism.Mvvm;
using TheDebtBook.Models;

namespace TheDebtBook.ViewModels
{
    public class EditAccountViewModel: BindableBase
    {
        ObservableCollection<Transaction> transactions;
        public EditAccountViewModel(Account account, Transaction transaction)
        {
            transactions = new ObservableCollection<Transaction>();
            transactions.Add(new Transaction ( "1",200));

        }

        #region Properties

        Account _currentaccount;
        Transaction _currentTransaction;
        public Account CurrentAccount { get { return _currentaccount; } set { SetProperty(ref _currentaccount, value); } }

        public Transaction CurrentTransaction { get { return _currentTransaction; } set { SetProperty(ref _currentTransaction, value); } }

        public bool isValid
        {
            get
            {
                if (string.IsNullOrEmpty(CurrentTransaction.Id) || CurrentTransaction.Amount==0)
                    return false;
                else
                    return true;
            }
        }

        public ObservableCollection<Transaction> Transactions
        {
            get
            {
                return transactions;
            }
        }

        #endregion





        #region Methods

        public void UpdateBalance()
        {
        }

        public void AddNewTransaction()
        {
            transactions.Add(new Transaction());
        }
        #endregion
    }


}
