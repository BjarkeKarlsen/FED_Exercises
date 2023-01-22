using Prism.Commands;
using System.Windows.Input;
using eksamenssaet2022.Models;
using Prism.Mvvm;
using System.Configuration;
using System.Security.Policy;
using System.Transactions;


namespace eksamenssaet2022.ViewModels;

public class CreatePackingListViewModel : BindableBase
{
    string? _title;
    //string? _name;

    public CreatePackingListViewModel(string title, PackingList packingLists)
    {
        Title = title;
        PackingLists = packingLists;
    }

    #region 
    public string Title { get { return _title; } set { SetProperty(ref _title, value); } }
    //public string Name { get { return _name; } set { SetProperty(ref _name, value); } }


    PackingList _packingList;

    public PackingList PackingLists { get { return _packingList; } set { SetProperty(ref _packingList, value); } }

    public bool IsValid
    {
        get
        {
            return string.IsNullOrEmpty(PackingLists.Name) == null;
        }
    }
    #endregion



    #region commands
    
    ICommand _addItemBtnCommand;

    public ICommand AddItemBtnCommand{
          get
                {
                        return _addItemBtnCommand ?? (_addItemBtnCommand = new DelegateCommand(
                        AddItemBtnCommand_Execute, AddItemBtnCommand_CanExecute)
                        .ObservesProperty(() => PackingLists.Name)
                        .ObservesProperty(() => PackingLists.Id));
                }
    }

    public void AddItemBtnCommand_Execute()
    {

    }

    public bool AddItemBtnCommand_CanExecute()
    {
        return IsValid;

    }


    #endregion

}






