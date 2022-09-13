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
using AgentAssignment1;

namespace Lesson_5
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        Agent agent = new Agent();
        public MainWindow()
        {
            InitializeComponent();

            agent.ID = "007";
            agent.CodeName = "James Bond";
            agent.Speciality = "Assassionation";
            agent.Assignment = "UpperVolta";
            DataContext = agent;
        }
    }
}
