using Microsoft.Win32;
using Prism.Commands;
using Prism.Mvvm;
using Summer2022.Data;
using Summer2022.Models;
using Summer2022.Views;
using System;
using System.Collections.ObjectModel;
using System.IO;
using System.Windows;

namespace Summer2022.ViewModels;

internal class MainWindowViewModel : BindableBase
{
    public MainWindowViewModel()
    {
        PackingLists = new();
        PackingLists.Add(new PackingList("1", "My Ferie"));
        CurrentPackingList = PackingLists[0];
    }

    #region Propeties
    private PackingList _currentPackingList;
    public PackingList CurrentPackingList
    {
        get { return _currentPackingList; }
        set { SetProperty(ref _currentPackingList, value); }
    }



    private ObservableCollection<PackingList> _packingLists;
    public ObservableCollection<PackingList> PackingLists { get { return _packingLists; } set { SetProperty(ref _packingLists, value); } }

    private int _currentIndex;
    public int CurrentIndex { get { return _currentIndex; } set { SetProperty(ref _currentIndex, value); } }

    private string _filePath = "";
    private string _fileName = "No file loaded";
    public string FileName { get { return _fileName; } set { SetProperty(ref _fileName, value); } }

    #endregion

    #region Commands
    private DelegateCommand _addCommand;
    public DelegateCommand AddCommand => _addCommand ?? (_addCommand = new DelegateCommand(_executeAddCommand));

    private void _executeAddCommand()
    {
        // Create new packing list
        var packingList = new PackingList();
        packingList.Id = (PackingLists.Count + 1).ToString();

        // Create new view and viewmodel for CreatePackageList
        var viewModel = new CreatePackageListViewModel("Create a new packinglist", packingList);
        var dlg = new CreatePackageListView { DataContext = viewModel };

        if (dlg.ShowDialog() != true)
            return;

        PackingLists.Add(packingList);
        CurrentPackingList = packingList;
    }

    private DelegateCommand _editCommand;
    public DelegateCommand EditCommand => _editCommand ??
        (_editCommand = new DelegateCommand(_executeEditCommand, canExecuteEditCommand).
        ObservesProperty(() => CurrentIndex));

    private void _executeEditCommand()
    {
        var tempPackingList = CurrentPackingList.Clone();
        var viewModel = new ViewPackingListViewModel("Make a new specifik packing list", tempPackingList) { };
    }

    private bool canExecuteEditCommand()
    {
        return CurrentIndex >= 0;
    }

    DelegateCommand _openFileCommand;
    public DelegateCommand OpenFileCommand
    {
        get { return _openFileCommand = new DelegateCommand(openFileCommand_Execute); }
    }

    private void openFileCommand_Execute()
    {
        var dialog = new OpenFileDialog
        {
            Filter = "Packing documents|*dbt|All Files|*.*",
            DefaultExt = "dbt"
        };

        if (_filePath == "")
            dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
        else
            dialog.InitialDirectory = Path.GetDirectoryName(_filePath);

        if (dialog.ShowDialog(Application.Current.MainWindow) != true)
            return;

        _filePath = dialog.FileName;
        FileName = Path.GetFileName(_filePath);
        try
        {
            PackingLists = Repository.ReadFile(_filePath);
        }
        catch (Exception e)
        {
            MessageBox.Show(e.Message, "Unable to open file", MessageBoxButton.OK, MessageBoxImage.Error);
        }

    }
    #endregion
}
