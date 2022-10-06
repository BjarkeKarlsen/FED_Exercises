using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheDebtBook.Models
{
    public class Transaction: BindableBase
    {
        string? _id;
        double? _amount;
        public Transaction()
        {

        }

        
        public Transaction(string? id, double? amount)
        {
            _id = id;
            _amount = amount;
        }

        public Transaction? Clone()
        {
            return MemberwiseClone() as Transaction;
        }
        public string? Id { get { return _id; } set { SetProperty(ref _id, value); } }
        public double? Amount { get { return _amount; } set { SetProperty(ref _amount, value); } }
    }
}
