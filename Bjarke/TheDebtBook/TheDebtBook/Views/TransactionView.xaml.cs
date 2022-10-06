using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using TheDebtBook.ViewModels;
using TheDebtBook.Models;

namespace TheDebtBook.Views
{
    /// <summary>
    /// Interaction logic for AccountView.xaml
    /// </summary>
    public partial class TransactionView : Window
    {
        public TransactionView()
        {
            InitializeComponent();
        }

        private void btnAdd_Click(object sender, RoutedEventArgs e)
        {
            var viewModel = DataContext as TransactionViewModel;

            //DialogResult = true;
            if (viewModel.IsValid)
            {
                //DialogResult = true;

                Transaction transaction = new Transaction(56);
                transaction.Amount = viewModel.CurrentTransaction.Amount;
                transaction.Date = viewModel.CurrentTransaction.Date;
                viewModel.CurrentAccount.Transaction.Add(transaction);
                lbxTransaction.Items.Refresh();
                //viewModel.UpdateBalance();
                //viewModel.AddNewTransaction();
                //tbxValue.Focus();
            }
        }
    }
}
