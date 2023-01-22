using System.Collections.Generic;
using System.Collections.ObjectModel;
using Prism.Mvvm;
namespace Summer2022.Models;

public class PackingList : BindableBase
{
    public PackingList()
    {
        Items = new();
    }
    public PackingList(string? id, string? name)
    {
        Id = id;
        Name = name;
        Items = new();
    }

    public PackingList? Clone()
    {
        return MemberwiseClone() as PackingList;
    }

    #region Privates Fields
    string _id;
    string? _name;
    ObservableCollection<Item> _items;

    #endregion

    #region Publics Fields
    public string? Id { get => _id; set => SetProperty(ref _id, value); }
    public string? Name { get => _name;  set => SetProperty(ref _name, value); }

    public ObservableCollection<Item> Items { get => _items;  set => SetProperty(ref _items, value);  }

    #endregion
}
