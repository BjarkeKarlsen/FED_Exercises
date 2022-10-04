using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Debtbook.Models
{
    public class Deptor
    {
        string? name;
        int? amount;

        public Deptor()
        {

        }

        public Deptor(string? dName, int dAmount)
        {
            name = dName;
            amount = dAmount;
        }

        public string? Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }

        public int? Amount
        {
            get
            {
                return amount;
            }
            set
            {
                amount = value;
            }
        }
    }
}

