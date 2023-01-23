using Prism.Commands;
using Prism.Mvvm;
using Eksamen.Models;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace Eksamen.ViewModels;

internal class BoardGameViewModel : BindableBase
{
    public BoardGameViewModel(string titel, BoardGame boardGame) {
        Titel = titel;
        CurrentBoardGame = boardGame;
 
        Name = boardGame.Name;
    }

    #region Propeties
    string _titel;
    string _name;
    BoardGame _currentBoardGame;
    
    public string Titel { get => _titel; set => SetProperty(ref _titel, value);  }
    public string Name { get => _name; set => SetProperty(ref _name, value); }
    public BoardGame CurrentBoardGame { get => _currentBoardGame;  set => SetProperty(ref _currentBoardGame, value); }

    #endregion

    #region Methodes


    #endregion


    #region Commands

    private DelegateCommand _deliverCommand;
    public ICommand DeliverCommand => _deliverCommand ??= new DelegateCommand(ExecuteDeliverCommand);
    private void ExecuteDeliverCommand() {
       CurrentBoardGame.UnBorrow();
    }

    private DelegateCommand _borrowCommand;
    public ICommand BorrowCommand => _borrowCommand ??= new DelegateCommand(ExecuteBorrowCommand);
    private void ExecuteBorrowCommand() {
        CurrentBoardGame.Borrow();
    }

    #endregion
}
