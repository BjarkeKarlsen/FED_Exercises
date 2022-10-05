using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheDebtBook.Models
{
    public class Transaction : BindableBase
    {
        string _date;
        double _money;

        public Transaction() 
        { 
        }
        public Transaction(string date, double money) {
            _date = date;
            _money = money;
        }

        public string Date { get { return _date; } set{ SetProperty(ref _date, value);  } }

        public double Money { get { return _money; } set { SetProperty(ref _money, value); } }
    }
}
