using Prism.Mvvm;
using System.Collections.Generic;


namespace eksamenssaet2022.Models;

public class PackingList : BindableBase
{
string? _id;
string? _name;
    int? _amount;

List<Item> _items;

public PackingList()
    {
        _items = new List<Item>();
    }

public PackingList(string id, string? name, List<Item> items)
    {
        Id = id;
        Name = name;
        Items = items;

      
    }


    public PackingList? Clone()
    {
    return MemberwiseClone() as PackingList;
    }

    public string? Id { get { return _id; } set { SetProperty(ref _id, value); } }

public string? Name { get { return _name; } set { SetProperty(ref _name, value); } }

public List<Item> Items
{
    get { return _items; }
    set { SetProperty(ref _items, value); }
}


}
