using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using Debtbook.Models;
using Prism.Commands;
using Prism.Mvvm;

namespace Debtbook.ViewModels
{
    public class MainWindowViewModel: BindableBase
    {
        ObservableCollection<Deptor> deptors = new ObservableCollection<Deptor>();
        public MainWindowViewModel()
        {
            deptors.Add(new Deptor("Marianne", 200));

        }

        #region properties

        public ObservableCollection<Deptor> Deptors
        {
            get { return deptors; }
            set { SetProperty(ref deptors, value); }
        }

        #endregion

        #region Methods

        public void AddNewDeptor()
        {
            deptors.Add(new Deptor());
        }
        
        #endregion
    }


}

