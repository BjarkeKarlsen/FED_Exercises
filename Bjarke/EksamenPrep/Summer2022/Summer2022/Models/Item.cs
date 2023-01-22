using Prism.Mvvm;
using System;
namespace Summer2022.Models;

public class Item : BindableBase
{
    public Item()
    {

    }

    public Item(string id, string name, int amount)
    {
        Id = id;
        Name = name;
        Amount = amount;
        IsPacked = false;
    }



    #region Public Fields
    public string? Id { get => _id;  set => SetProperty(ref _id, value); } 
    public string? Name { get => _name; set => SetProperty(ref _name, value); } 
    public int Amount { get => _amount;  set => SetProperty(ref _amount, value); }

    public bool IsPacked { get => _isPacked;  set => SetProperty(ref _isPacked, value); }

    #endregion

    #region Privates
    string? _id;
    string? _name;
    int _amount;
    bool _isPacked;

    #endregion
}
