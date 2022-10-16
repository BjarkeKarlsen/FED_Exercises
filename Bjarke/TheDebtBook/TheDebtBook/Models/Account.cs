using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheDebtBook.Models
{
    public class Account : BindableBase
    {
        string? _id;
        string? _name;
        double? _money;
        List<Transaction> _transaction;
        public Account()
        {
            _transaction = new List<Transaction>();
        }
        public Account(string id, string name, double? money)
        {

            _id = id;
            _name = name;
            _money = money;
            Transaction = new List<Transaction>();
            var firstTransaction = new Transaction(money);
            Transaction.Add(firstTransaction);
            CalculateMoney();
        }


        public void CalculateMoney()
        {
            double? money = 0;
            foreach (Transaction item in Transaction)
            {
                money += item.Amount;
            }
            _money = money;
        }

        public Account? Clone()
        {
            return MemberwiseClone() as Account;
        }
        public string? Id { get { return _id; } set { SetProperty(ref _id, value); } }

        public string? Name { get { return _name; } set { SetProperty(ref _name, value); } }

        public double? Money { get { return _money; } set { SetProperty(ref _money, value); } }

        public List<Transaction> Transaction
        {
            get { return _transaction; }
            set { SetProperty(ref _transaction, value); }
        }

    }
}
