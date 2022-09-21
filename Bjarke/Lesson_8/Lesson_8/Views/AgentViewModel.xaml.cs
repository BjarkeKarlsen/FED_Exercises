using Lesson_8.ViewModels;
using System.Windows;


namespace Lesson_8.Views
{
    /// <summary>
    /// Interaction logic for AgentViewModel.xaml
    /// </summary>
    public partial class AgentViewModel : Window
    {
        public AgentViewModel() {
            InitializeComponent();
        }

        private void BtnOk_OnClick(object sender, RoutedEventArgs e)
        {
            var vm = DataContext as AgentViewModel;
            if (vm.IsValid)
                DialogResult = true;
            else
                MessageBox.Show("Enter values for Id, codename and specialities", "Missing data");


        }
    }
}
