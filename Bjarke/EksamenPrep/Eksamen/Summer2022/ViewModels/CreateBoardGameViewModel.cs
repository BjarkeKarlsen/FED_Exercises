using Microsoft.Xaml.Behaviors.Core;
using Prism.Commands;
using Prism.Mvvm;
using Eksamen.Models;
using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Input;
using Eksamen.Views;

namespace Eksamen.ViewModels;

internal class CreateBoardGameViewModel : BindableBase
{

    public CreateBoardGameViewModel(string titel, BoardGame boardGame) {
        Titel = titel;
        CurrentBoardGame = boardGame;

    }

    #region Properties

    private string _titel;
    private BoardGame _currentPackingList;
    private ObservableCollection<Rate> _currentItems;
    public string Titel { get => _titel;  set => SetProperty(ref _titel, value);  }
    public BoardGame CurrentBoardGame { get => _currentPackingList; set => SetProperty(ref _currentPackingList, value); }
    public ObservableCollection<Rate> CurrentRated { get => _currentItems;  set  => SetProperty(ref _currentItems, value);  }

    #endregion


}