using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using System.Windows.Markup;

namespace eksamenssaet2022.Models
{
    public class Item : BindableBase
    {
        string? _name;
        int? _amount;

        public Item(string name, int amount )
        {
            _name = name;
            _amount = amount;
           
        }

        public Item? Clone()
        {
            return MemberwiseClone() as Item;
        }
        public string? Name { get { return _name; } set { SetProperty(ref _name, value); } }
        public int? Amount { get { return _amount; } set { SetProperty(ref _amount, value); } }

    }
}
