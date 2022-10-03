﻿using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheDebtBook.Models;
using System.Windows.Input;

namespace TheDebtBook.ViewModels
{
    public class AccountViewModel : BindableBase
    {
        public AccountViewModel(string titel, Account account) 
        {
            Titel = titel;
            CurrentAccount = account;
        }

        #region Propeties
        string _titel;
        public string Titel { get { return _titel; } set { SetProperty(ref _titel, value); } }

        Account _currentaccount;
        public Account CurrentAccount { get { return _currentaccount; } set { SetProperty(ref _currentaccount, value); } }

        public bool IsValid {
            get {
                if (string.IsNullOrEmpty(CurrentAccount.Id) || string.IsNullOrEmpty(CurrentAccount.Name))
                    return false;

                return true;
            }
        }
        #endregion

        #region Commands


        #endregion
    }
}