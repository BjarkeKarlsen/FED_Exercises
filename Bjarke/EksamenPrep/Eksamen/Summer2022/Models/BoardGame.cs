using System.Collections.ObjectModel;
using Prism.Mvvm;

namespace Eksamen.Models;

public class BoardGame : BindableBase
{
    public BoardGame()
    {
        Borrowed = 0;
        NumberOfRatings = 0;
        Rates = new();
    }
    public BoardGame(string name, string description, string realeseDay, int minPlayers, int maxPlayers, string gameTime, int age, int available) {
        Name = name;
        Description = description;
        RealeseDay = realeseDay;
        MinPlayers = minPlayers;
        MaxPlayers = maxPlayers;
        GameTime = gameTime;
        Age = age;
        Available = available;
        Borrowed = 0;
        NumberOfRatings = 0;
        Rates = new();
    }

    public void UpdateRated(Rate rate) {
        if (rate.Rated >= 0 && rate.Rated <= 5) { 
            NumberOfRatings++;
            Rates.Add(rate);
            _ = GetRated();
        }
    }
    public double GetRated() {
        double averageRate = 0;
        foreach (var rate in Rates) {
            averageRate += rate.Rated;
        }
        AverageRating = averageRate / NumberOfRatings;
        return AverageRating;
    }

    public void Borrow() {
        if (Available <= 0)
            return;

        Available--;
        Borrowed++;
    }

    public void UnBorrow() {
        if (Borrowed <= 0)
            return;

        Available++;
        Borrowed--;
    }


    #region Privates Fields
    string? _name;
    string? _description;
    string? _realeseDay;
    int _minPlayers;
    int _maxPlayers;
    string? _gameTime;
    int _age;
    int _available; 
    int _borrowed;
    int _numberOfRatings;
    double _averageRating;
    ObservableCollection<Rate> _rates;

    #endregion

    #region Publics Fields

    public string? Name { get => _name;  set => SetProperty(ref _name, value); }
    public string? Description { get => _description; set => SetProperty(ref _description, value); }
    public string? RealeseDay { get => _realeseDay; set => SetProperty(ref _realeseDay, value); }
    public int MinPlayers { get => _minPlayers; set => SetProperty(ref _minPlayers, value); }
    public int MaxPlayers { get => _maxPlayers; set => SetProperty(ref _maxPlayers, value); }
    public string? GameTime { get => _gameTime; set => SetProperty(ref _gameTime, value); }
    public int Age { get => _age; set => SetProperty(ref _age, value); }
    public int Available { get => _available; set => SetProperty(ref _available, value); }
    public int Borrowed { get => _borrowed; set => SetProperty(ref _borrowed, value); }
    public int NumberOfRatings { get => _numberOfRatings; set => SetProperty(ref _numberOfRatings, value); }
    public double AverageRating {  get => _averageRating; set => SetProperty(ref _averageRating, value); }
    public ObservableCollection<Rate> Rates { get => _rates;  set => SetProperty(ref _rates, value);  }

    #endregion
}
