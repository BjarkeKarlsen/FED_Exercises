using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utilities
{
    public class Clock : BindableBase
    {
        public Clock()
        {
            Update();
        }

        public void Update()
        {
            Date = DateTime.Now.ToLongDateString();
            Time = DateTime.Now.ToLongTimeString();
        }

        private string? _date;

        public string? Date
        {
            get { return _date; }
            private set { SetProperty(ref _date, value); }
        }

        string? _time;

        public string? Time
        {
            get { return _time; }
            private set { SetProperty(ref _time, value); }
        }

    }
}
