using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using AgentAssignment1;

namespace Lesson_5_3
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        ObservableCollection<Agent> agents;
        public MainWindow()
        {
            InitializeComponent();
            agents = new ObservableCollection<Agent>();
            agents.Add(new Agent("001", "Dr Drake", "Assassionation", "Goldfinger"));
            agents.Add(new Agent("007", "James Bond", "Assassionation", "UpperVolta"));

            CurrentAgent = agents[0];
            AgentGrid.DataContext = Agents;

        }

        #region Button Clicked

        private void BtnBack_Click(object sender, RoutedEventArgs e)
        {
            if (lbxAgents.SelectedIndex > 0)
                lbxAgents.SelectedIndex = --lbxAgents.SelectedIndex;
        }

        private void BtnForward_Click(object sender, RoutedEventArgs e)
        {
            if (lbxAgents.SelectedIndex < lbxAgents.Items.Count - 1)
                lbxAgents.SelectedIndex = ++lbxAgents.SelectedIndex;
        }

        private void BtnAddNew_Click(object sender, RoutedEventArgs e)
        {
            var vm = DataContext as MainWindow;
            vm.AddNewAgent();
            lbxAgents.SelectedIndex = lbxAgents.Items.Count - 1;
            tbxId.Focus();
        }

        #endregion

        #region Propeties

        private Agent currentAgent = null;
        public Agent CurrentAgent
        {
            get { return currentAgent; }
            set
            {
                if (currentAgent != value)
                {
                    currentAgent = value;
                    NotifyPropertyChanged();
                }
            }

        }

        public ObservableCollection<Agent> Agents
        {
            get { return agents; }
        }

        #endregion

        #region Methods

        public void AddNewAgent()
        {
            agents.Add(new Agent());
        }

        #endregion

        #region INotifyPropertyChanged implementation

        public event PropertyChangedEventHandler PropertyChanged;

        protected void NotifyPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        #endregion



    }
}
