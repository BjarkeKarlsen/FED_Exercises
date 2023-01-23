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

namespace sailboat
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    { 
        private Sailboat s1 = new Sailboat();
        public MainWindow()
        {
            InitializeComponent();
        }

        private void nameText_TextChanged(object sender, TextChangedEventArgs e)
        {
            s1.Name = nameText.Text;

        }

        private void lengthText_TextChanged(object sender, TextChangedEventArgs e)
        {
            s1.Length = double.Parse(lengthText.Text);
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Hullspeed.Text = s1.Hullspeed().ToString("F1");
        }
    }


}


