
using Prism.Commands;
using eksamenssaet2022.Models;
using eksamenssaet2022.Views;
using Prism.Mvvm;
using System.Collections.ObjectModel;
using System.Collections.Generic;
using eksamenssaet2022.Data;
using Microsoft.Win32;
using System.Windows;
using System;
using System.IO;


namespace eksamenssaet2022.ViewModels
{
    public partial class MainWindowViewModel : BindableBase
    {
        public MainWindowViewModel()
        {
            var snowbard = new Item("Snowbard", 1);

            var items = new List<Item>();

            items.Add(snowbard);


            PackingLists = new ObservableCollection<PackingList>();
            PackingLists.Add(new PackingList("1", "SKIFERIE!!", items));
     
            CurrentPackingList = PackingLists[0];
        }



        #region Properties
        private string _filePath = "";
        private string _fileName = "No file loaded";


        private PackingList currentPackingList;
        public PackingList CurrentPackingList { get { return currentPackingList; } set { SetProperty(ref currentPackingList, value); } }

        private ObservableCollection<PackingList> _packingLists;
        public ObservableCollection<PackingList> PackingLists { get { return _packingLists; } set { SetProperty(ref _packingLists, value); } }

        private int _currentIndex;
        public int CurrentIndex { get { return _currentIndex; } set { SetProperty(ref _currentIndex, value); } }

    
        public string FileName
        {
            get { return _fileName; }
            set
            {
                SetProperty(ref _fileName, value);
                RaisePropertyChanged("Title");
            }
        }
        #endregion

        #region Commands
        private DelegateCommand _addCommand;
        public DelegateCommand AddCommand =>
            _addCommand ?? (_addCommand = new DelegateCommand(ExecuteAddCommand));

        private void ExecuteAddCommand()
        {
            var newPackingList = new PackingList();
            newPackingList.Id = (PackingLists.Count + 1).ToString();

            var viewModel = new CreatePackingListViewModel("Add new List", newPackingList);

            var dlg = new ViewPackingListView { DataContext = viewModel };
            if (dlg.ShowDialog() == true)
            {
                PackingLists.Add(newPackingList);
                CurrentPackingList = newPackingList;
            }

        }

        private void OpenFileCommand_Execute()
        {
            var dialog = new OpenFileDialog
            {
                Filter = "PackingList documents|*.dbt|All Files|*.*",
                DefaultExt = "dbt"
            };
            if (_filePath == "")
                dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            else
                dialog.InitialDirectory = Path.GetDirectoryName(_filePath);

            if (dialog.ShowDialog(Application.Current.MainWindow) == true)
            {
                _filePath = dialog.FileName;
                FileName = Path.GetFileName(_filePath);
                try
                {
                    PackingLists = Repository.ReadFile(_filePath);
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "Unable to open file", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }



        DelegateCommand _SaveAsCommand;
        public DelegateCommand SaveAsCommand
        {
            get { return _SaveAsCommand ?? (_SaveAsCommand = new DelegateCommand(SaveAsCommand_Execute)); }
        }

        private void SaveAsCommand_Execute()
        {
            var dialog = new SaveFileDialog
            {
                Filter = "PackingList documents|*.dbt|All Files|*.*",
                DefaultExt = "dbt"
            };
            if (_filePath == "")
                dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            else
                dialog.InitialDirectory = Path.GetDirectoryName(_filePath);

            if (dialog.ShowDialog(Application.Current.MainWindow) == true)
            {
                _filePath = dialog.FileName;
                FileName = Path.GetFileName(_filePath);
                SaveFile();
            }
        }
        DelegateCommand _viewCommand;
        public DelegateCommand ViewCommand => _viewCommand ??
            (_viewCommand = new DelegateCommand(executeViewCommand, canExecuteEditCommand).
            ObservesProperty(() => CurrentIndex));

        private void executeViewCommand()
        {
            var tempPackingList = CurrentPackingList.Clone();
            var viewModel = new ViewPackingListViewModel("All Packing Lists", tempPackingList) { };
        }

        private bool canExecuteEditCommand()
        {
            return CurrentIndex >= 0;
        }


        DelegateCommand _SaveCommand;
        public DelegateCommand SaveCommand
        {
            get
            {
                return _SaveCommand ?? (_SaveCommand = new DelegateCommand(SaveFileCommand_Execute, SaveFileCommand_CanExecute)
                  .ObservesProperty(() => PackingLists.Count));
            }
        }
        private void SaveFileCommand_Execute()
        {
            SaveFile();
        }

        private bool SaveFileCommand_CanExecute()
        {
            return FileName != "" && PackingLists.Count > 0;
        }

        private void SaveFile()
        {
            try
            {
                Repository.SaveFile(_filePath, PackingLists);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Unable to save file", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        #endregion

    }
}
