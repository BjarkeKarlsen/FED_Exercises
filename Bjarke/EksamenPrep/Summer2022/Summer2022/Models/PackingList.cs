using System.Collections.Generic;
using Prism.Mvvm;
namespace Summer2022.Models;

internal class PackingList : BindableBase
{
    public PackingList()
    {
        _items = new();
    }
    public PackingList(string? id, string? name)
    {
        Id = id;
        Name = name;
        _items = new();
    }

    public PackingList? Clone()
    {
        return MemberwiseClone() as PackingList;
    }

    #region Privates Fields
    string _id;
    string? _name;
    List<Item> _items;

    #endregion

    #region Publics Fields
    public string? Id { get { return _id; } set { SetProperty(ref _id, value); } }
    public string? Name { get { return _name; } set { SetProperty(ref _name, value); } }

    public List<Item> Items { get { return _items; } set { SetProperty(ref _items, value); } }

    #endregion
}
