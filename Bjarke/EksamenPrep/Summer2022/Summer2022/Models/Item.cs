using Prism.Mvvm;
using System;
namespace Summer2022.Models;

internal class Item : BindableBase
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
    public string? Id { get { return _id; } set { SetProperty(ref _id, value); } }
    public string? Name { get { return _name; } set { SetProperty(ref _name, value); } }
    public int Amount { get { return _amount; } set { SetProperty(ref _amount, value); } }

    public bool IsPacked { get { return _isPacked; } set { SetProperty(ref _isPacked, value); } }

    #endregion

    #region Privates
    string? _id;
    string? _name;
    int _amount;
    bool _isPacked;

    #endregion
}
