using Prism.Commands;
using Prism.Mvvm;
using Summer2022.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Summer2022.ViewModels
{
    internal class ViewPackingListViewModel : BindableBase
    {
        public ViewPackingListViewModel(string titel, PackingList packingList)
        {
            Titel = titel;
            CurrentPackingList = packingList;
        }

        #region Propeties
        string _titel;
        public string Titel { get { return _titel; } set { SetProperty(ref _titel, value); } }

        PackingList _currentPackingList;
        public PackingList CurrentPackingList { get { return _currentPackingList; } set { SetProperty(ref _currentPackingList, value); } }

        public bool IsValid { get { return (string.IsNullOrEmpty(CurrentPackingList.Name)); } }


        #endregion


        #region Commands

        ICommand _closeBtnCommand;

        public ICommand CloseBtnCommand
        {
            get
            {
                return _closeBtnCommand ?? (
                    _closeBtnCommand = new DelegateCommand(
                        closeBtnCommand_Execute
                        )
                    );
            }
        }

        private void closeBtnCommand_Execute()
        {
        }
        #endregion
    }
}
