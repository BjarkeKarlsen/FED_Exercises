using Prism.Commands;
using eksamenssaet2022.Models;
using eksamenssaet2022.Views;
using Prism.Mvvm;
using System.Collections.ObjectModel;
using System.Collections.Generic;
using eksamenssaet2022.Data;
using Microsoft.Win32;
using System.Windows;
using System;
using System.IO;
using System.Windows.Input;
using System.Windows.Controls.Primitives;

namespace eksamenssaet2022.ViewModels
{
    public class ViewPackingListViewModel : BindableBase
    {
        public ViewPackingListViewModel(string title, PackingList packingList)
        {
            _title = Title;
            _packinglist = packingList;
            CurrentItems = packingList.Items;

        }


        #region Properties


        public bool IsValid { get { return (string.IsNullOrEmpty(PackingLists.Name)); } }

        private PackingList _title;
        public PackingList Title { get { return _title; } set { SetProperty(ref _title, value); } }

        PackingList _packinglist;
        public PackingList PackingLists { get { return _packinglist;  }
            set { SetProperty(ref _packinglist, value); }}

        ObservableCollection<Item> _item;

        public ObservableCollection<Item> CurrentItems { get { return _item; } set { SetProperty(ref _item, value); } }
            #endregion

            #region Commands

            ICommand _okBtnCommand;
        public ICommand OkBtnCommand
        {
            get
            {
                return _okBtnCommand ?? (_okBtnCommand = new DelegateCommand(
                    OkBtnCommand_Execute, OkBtnCommand_CanExecute)
                    .ObservesProperty(() => PackingLists.Name)
                    .ObservesProperty(() => PackingLists.Items));
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
