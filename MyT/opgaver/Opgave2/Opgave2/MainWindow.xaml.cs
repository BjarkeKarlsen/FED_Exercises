﻿using System;
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
using SIO = System.IO;

namespace Opgave2
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            Loaded += new RoutedEventHandler(MainWindow_Loaded);


        }
        void MainWindow_Loaded(object sender, RoutedEventArgs e)
        {
            string filename;
            filename = SIO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "babynames.txt");
            SIO.StreamReader reader = null;
            try
            {
                reader = new SIO.StreamReader(filename);
                {
                    for (int i = 0; i < 10; ++i)
                    {
                        lstDecadeTopNames.Items.Add(reader.ReadLine());
                    }
                }
            }
            finally
            {
                if (reader != null)
                    reader.Close();
            }
        }
    }
}
