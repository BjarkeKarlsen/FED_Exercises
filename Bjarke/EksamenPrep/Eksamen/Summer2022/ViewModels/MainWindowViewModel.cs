using Microsoft.Win32;
using Prism.Commands;
using Prism.Mvvm;
using Eksamen.Data;
using Eksamen.Models;
using Eksamen.Views;
using System;
using System.Collections.ObjectModel;
using System.IO;
using System.Windows;
using System.Windows.Input;

namespace Eksamen.ViewModels;

public class MainWindowViewModel : BindableBase
{
    public MainWindowViewModel()
    {
        BoardGames = new();
        CurrentRate = new(0);
        var boardGame = new BoardGame("7 Wonders", "Syv vidundere blev rejst gennem Oldtiden til Antikken.", "2017", 3, 7, "30-60", 10, 5);
        BoardGames.Add(boardGame);
        CurrentBoardGame = BoardGames[0];
    }

    #region Propeties
    private BoardGame _currentBoardGame;
    private Rate _currentRate;
    private ObservableCollection<Rate> _rates;
    private ObservableCollection<BoardGame> _boardGames;

    private int _currentIndex;
    private string _filePath = "";
    private string _fileName = "No file loaded";
    public BoardGame CurrentBoardGame {   get => _currentBoardGame;   set => SetProperty(ref _currentBoardGame, value);   }
    public ObservableCollection<BoardGame> BoardGames { get => _boardGames; set => SetProperty(ref _boardGames, value); }
    public Rate CurrentRate { get => _currentRate; set => SetProperty(ref _currentRate, value); }
    public ObservableCollection<Rate> CurrentRated { get => _rates; set => SetProperty(ref _rates, value); }
    public int CurrentIndex { get => _currentIndex;  set => SetProperty(ref _currentIndex, value); }
    public string FileName { get => _fileName;  set => SetProperty(ref _fileName, value); } 
    private bool IsValidBoardGame(BoardGame boardGame) {
        return !string.IsNullOrEmpty(boardGame.Name) && boardGame.Available > 0;
    }

    #endregion

    #region Commands
    private DelegateCommand _createBoardGameCommand;
    public DelegateCommand CreateBoardGameCommand => _createBoardGameCommand ??= new DelegateCommand(ExecuteCreateBoardGameCommand);
    private void ExecuteCreateBoardGameCommand()
    {
        // Create new packing list
        var boardGame = new BoardGame();
        // Create new view and viewmodel for CreatePackageList
        var viewModel = new CreateBoardGameViewModel("Create a new packinglist", boardGame);
        var dlg = new CreateBoardGameView { DataContext = viewModel };


        if (dlg.ShowDialog() == true) 
        {
            CurrentBoardGame = boardGame;
        }
        if (IsValidBoardGame(boardGame))
            BoardGames.Add(boardGame);
    }

    private DelegateCommand _rateBoardGameCommand;
    public ICommand RateBoardGameCommand => _rateBoardGameCommand ??= new DelegateCommand(ExecuteRateBoardGameCommand);
    private void ExecuteRateBoardGameCommand() {
        double rate = CurrentRate.Rated;
        CurrentBoardGame.UpdateRated(new Rate(rate));
    }

    private DelegateCommand _editBoardGameCommand;
    public DelegateCommand EditBoardGameCommand => _editBoardGameCommand ??= new DelegateCommand(ExecuteEditBoardGameCommand, CanExecuteEditBoardGameCommand).
        ObservesProperty(() => CurrentIndex);

    private void ExecuteEditBoardGameCommand() {
        var viewModel = new BoardGameViewModel("Create a new boardgame", CurrentBoardGame) { };
        var dlg = new BoardGameView { DataContext = viewModel };

        if (dlg.ShowDialog() != true)
            return;
    }
    private bool CanExecuteEditBoardGameCommand()
    {
        return CurrentIndex >= 0;
    }

    private bool CanExecuteEditCommand() { return CurrentIndex >= 0; }
    DelegateCommand _NewFileCommand;
    public DelegateCommand NewFileCommand {
        get { return _NewFileCommand = new DelegateCommand(NewFileCommand_Execute); }
    }

    private void NewFileCommand_Execute() {
        MessageBoxResult res = MessageBox.Show("Any unsaved data will be lost. Are you sure you want to initiate a new file?", "Warning",
            MessageBoxButton.YesNo, MessageBoxImage.Question, MessageBoxResult.No);
        if (res == MessageBoxResult.Yes) {
            BoardGames.Clear();
            FileName = "";
        }
    }

    DelegateCommand _OpenFileCommand;
    public DelegateCommand OpenFileCommand {
        get { return _OpenFileCommand = new DelegateCommand(OpenFileCommand_Execute); }
    }

    private void OpenFileCommand_Execute() {
        var dialog = new OpenFileDialog
        {
            Filter = "Boardgames documents|*.dbt|All Files|*.*",
            DefaultExt = "dbt"
        };
        if (_filePath != "")
            dialog.InitialDirectory = Path.GetDirectoryName(_filePath);
        else
            dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);

        if (dialog.ShowDialog(Application.Current.MainWindow) != true) {
            return;
        }
        _filePath = dialog.FileName;
        FileName = Path.GetFileName(_filePath);
        try {
            BoardGames = Repository.ReadFile(_filePath);
        }
        catch (Exception ex) {
            MessageBox.Show(ex.Message, "Unable to open file", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }

    DelegateCommand _SaveAsCommand;
    public DelegateCommand SaveAsCommand {
        get { return _SaveAsCommand ?? (_SaveAsCommand = new DelegateCommand(SaveAsCommand_Execute)); }
    }

    private void SaveAsCommand_Execute() {
        var dialog = new SaveFileDialog
        {
            Filter = "Boardgame documents|*.dbt|All Files|*.*",
            DefaultExt = "dbt"
        };
        if (_filePath == "")
            dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
        else
            dialog.InitialDirectory = Path.GetDirectoryName(_filePath);

        if (dialog.ShowDialog(Application.Current.MainWindow) == true) {
            _filePath = dialog.FileName;
            FileName = Path.GetFileName(_filePath);
            SaveFile();
        }
    }

    DelegateCommand _SaveCommand;
    public DelegateCommand SaveCommand => _SaveCommand ??= new DelegateCommand(SaveFileCommand_Execute, SaveFileCommand_CanExecute)
              .ObservesProperty(() => BoardGames.Count);

    private void SaveFileCommand_Execute() {
        SaveFile();
    }

    private bool SaveFileCommand_CanExecute() {
        return FileName != "" && BoardGames.Count > 0;
    }

    private void SaveFile() {
        try {
            Repository.SaveFile(_filePath, BoardGames);
        }
        catch (Exception ex) {
            MessageBox.Show(ex.Message, "Unable to save file", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }
    #endregion
}
