using System;
using System.Windows;


namespace Summer2022.Views;

/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Window_Activated(object sender, EventArgs e)
    {
        DataGrid_PackingList.Items.Refresh();
    }

}
