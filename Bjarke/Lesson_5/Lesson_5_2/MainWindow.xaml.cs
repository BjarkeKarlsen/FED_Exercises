using System.Collections.Generic;
using System.Windows;

namespace Lesson_5_2
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    /// 

    public partial class MainWindow : Window
    {
        List<Agent> agents = new List<Agent>();
        public MainWindow()
        {

            InitializeComponent();
            agents.Add(new Agent("001", "Dr Drake", "Assassionation", "Goldfinger"));
            agents.Add(new Agent("007", "James Bond", "Assassionation", "UpperVolta"));

            DataContext = agents;

        }
    }
}
