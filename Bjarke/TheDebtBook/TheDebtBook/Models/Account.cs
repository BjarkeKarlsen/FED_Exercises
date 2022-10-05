using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheDebtBook.Models
{
    public class Account : BindableBase
    {
        string _id;
        string _name;
        double _money;
        private List<Transaction> _transactions; 

        public Account() 
        { 
        }

        public Account(string id, string name, double money) {
            _id = id;
            _name = name;
            _money = money;
        }

        public Account? Clone() 
        {
            return MemberwiseClone() as Account;
        }
        public string Id { get { return _id; } set{ SetProperty(ref _id, value);  } }

        public string Name { get { return _name; } set { SetProperty(ref _name, value); } }

        public double Money { get { return _money; } set { SetProperty(ref _money, value); } }

        public List<Transaction> Transactions { get { return _transactions; } set { SetProperty(ref _transactions, value); } } 

        public void setMoney(){
            double money = 0;
            foreach (transactions in _transactions)
            {
                money += _transactions.Money;
            }
            _money = money;
        }

    }
}
