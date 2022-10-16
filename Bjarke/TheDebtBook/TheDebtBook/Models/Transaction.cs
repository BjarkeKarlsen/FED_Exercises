using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Prism.Mvvm;

namespace TheDebtBook.Models
{

    public class Transaction : BindableBase
    {
        string? _date;
        double? _amount;
        public Transaction()
        {
            Date = DateTime.Now.ToString("g");

        }


        public Transaction(double? amount)
        {
            _date = DateTime.Now.ToString("g");
            _amount = amount;
        }

        public Transaction? Clone()
        {
            return MemberwiseClone() as Transaction;
        }
        public string? Date { get { return _date; } set { SetProperty(ref _date, value); } }
        public double? Amount { get { return _amount; } set { SetProperty(ref _amount, value); } }

    }
}
