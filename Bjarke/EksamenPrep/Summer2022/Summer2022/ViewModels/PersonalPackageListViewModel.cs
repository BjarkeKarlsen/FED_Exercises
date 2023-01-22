using Prism.Commands;
using Prism.Mvvm;
using Summer2022.Models;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace Summer2022.ViewModels;

internal class PersonalPackageListViewModel : BindableBase
{
    public PersonalPackageListViewModel(string titel, PackingList packingList) {
        Titel = titel;
        CurrentPackingList = packingList;
        CurrentItems = packingList.Items;
        Name = packingList.Name;
    }

    #region Propeties
    string _titel;
    string _name;
    PackingList _currentPackingList;
    ObservableCollection<Item> _currentItems;
    public string Titel { get => _titel; set => SetProperty(ref _titel, value);  }
    public string Name { get => _name; set => SetProperty(ref _name, value); }
    public PackingList CurrentPackingList { get => _currentPackingList;  set => SetProperty(ref _currentPackingList, value); }
    public ObservableCollection<Item> CurrentItems { get => _currentItems; set => SetProperty(ref _currentItems, value); }

    #endregion

    #region Methodes
    public bool IsValid { get { return (string.IsNullOrEmpty(CurrentPackingList.Name)); } }


    #endregion


    #region Commands

    #endregion
}
