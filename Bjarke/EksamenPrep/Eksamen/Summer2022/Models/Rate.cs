using Prism.Mvvm;
namespace Eksamen.Models;

public class Rate : BindableBase
{

    public Rate() {
    }
    public Rate(double rated)
    {
        _rated = rated;
    }

    #region Public Fields

    public double Rated { get => _rated; set => SetProperty(ref _rated, value); }

    #endregion

    #region Privates
    double _rated;

    #endregion
}
