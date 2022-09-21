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
using System.Windows.Navigation;
using System.Windows.Shapes;
using AgentAssignment;

namespace AgentApp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        List<Agent> agents = new List<Agent>();
       
        public MainWindow()
        {
            InitializeComponent();
            agents.Add(new Agent(){ ID= "007", CodeName="James Bond", Speciality="Assasination",Assignment = "UpperVolta" });
            agents.Add(new Agent() { ID = "001", CodeName = "Roger", Speciality = "Martiny", Assignment = "Goldfinger" });
            agentGrid.DataContext = agents;


        }
    }

}
