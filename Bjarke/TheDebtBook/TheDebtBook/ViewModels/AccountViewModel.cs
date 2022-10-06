﻿using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheDebtBook.Models;
using System.Windows.Input;
using Prism.Commands;

namespace TheDebtBook.ViewModels
{
    public class AccountViewModel : BindableBase
    {
        public AccountViewModel(string titel, Account account) 
        {
            Titel = titel;
            CurrentAccount = account;
        }

        #region Properties
        string _titel;
        public string Titel { get { return _titel; } set { SetProperty(ref _titel, value); } }

        Account _currentaccount;
        public Account CurrentAccount { get { return _currentaccount; } set { SetProperty(ref _currentaccount, value); } }

        public bool IsValid {
            get {
                if (string.IsNullOrEmpty(CurrentAccount.Name) || (CurrentAccount.Money == 0) )
                    return false;
                else
                    return true;
            }
        }

 
        #endregion

        #region Commands

        ICommand _okBtnCommand;
        public ICommand OkBtnCommand 
        { 
            get {
                return _okBtnCommand ?? (_okBtnCommand = new DelegateCommand(
                    OkBtnCommand_Execute, OkBtnCommand_CanExecute)
                    .ObservesProperty(() => CurrentAccount.Id)
                    .ObservesProperty(() => CurrentAccount.Name));
            }
        }

        private void OkBtnCommand_Execute() 
        { 
        }
        private bool OkBtnCommand_CanExecute() 
        {
            return IsValid;
        }

        
        #endregion
    }
}
