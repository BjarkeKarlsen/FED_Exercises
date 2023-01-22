using Microsoft.Xaml.Behaviors.Core;
using Prism.Commands;
using Prism.Mvvm;
using Summer2022.Models;
using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Input;

namespace Summer2022.ViewModels;

internal class CreatePackageListViewModel : BindableBase
{

    public CreatePackageListViewModel(string titel, PackingList packingList) {
        Titel = titel;
        CurrentPackingList = packingList;
        CurrentItems = packingList.Items;
    }

    #region Properties

    private string _titel;
    private PackingList _currentPackingList;
    private ObservableCollection<Item> _currentItems;
    private string _newItemName;
    private int _newItemQuantity;
    public string Titel { get => _titel;  set => SetProperty(ref _titel, value);  }
    public PackingList CurrentPackingList { get => _currentPackingList; set => SetProperty(ref _currentPackingList, value); }
    public ObservableCollection<Item> CurrentItems { get => _currentItems;  set  => SetProperty(ref _currentItems, value);  }
    public string NewItemName { get => _newItemName; set => SetProperty(ref _newItemName, value); }
    public int NewItemQuantity {  get => _newItemQuantity; set => SetProperty(ref _newItemQuantity, value); }

    #endregion

    #region Methods

    public bool IsValid => !string.IsNullOrEmpty(NewItemName) && NewItemQuantity > 0; 
    public string GetNextItemIndex => (CurrentItems.Count + 1).ToString();

    #endregion

    #region Commands

    private DelegateCommand _addItemCommand;
    public ICommand AddItemCommand => _addItemCommand ??= new DelegateCommand(ExecuteAddItemCommand);
    private void ExecuteAddItemCommand() {
        if (!IsValid)
            return; 
            
        CurrentItems.Add(new Item(GetNextItemIndex, NewItemName, NewItemQuantity));
        CurrentPackingList.Items = CurrentItems;
    }




    #endregion
}