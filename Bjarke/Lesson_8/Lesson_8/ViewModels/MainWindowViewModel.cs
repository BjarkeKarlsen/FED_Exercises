using System;
using Lesson_8.Models;
using System.Collections.ObjectModel;
using Prism.Commands;
using Prism.Mvvm;
using System.Windows.Media.Animation;
using System.Windows;
using System.Windows.Threading;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Media;
using Clock = Utilities.Clock;


namespace Lesson_8.ViewModels
{
    public class MainWindowViewModel : BindableBase
    {

        private ObservableCollection<Agent> _agents = new ObservableCollection<Agent>();
        private DispatcherTimer timer = new DispatcherTimer();

        public MainWindowViewModel()
        {
            _agents.Add(new Agent("001", "Dr Drake", "Assassionation", "Goldfinger"));
            _agents.Add(new Agent("007", "James Bond", "Assassionation", "UpperVolta"));

            CurrentAgent = _agents[0];

            timer.Interval = TimeSpan.FromSeconds(1);
            timer.Tick += new EventHandler(Timer_Tick);
            timer.Start();

        }

        #region Propeties

        private Agent? _currentAgent = null;

        public Agent? CurrentAgent
        {
            get { return _currentAgent; }
            set { SetProperty(ref _currentAgent, value); }

        }
        public ObservableCollection<Agent> Agents
        {
            get { return _agents; }
            set { SetProperty(ref _agents, value); }
        }

        private int _currentIndex;
        public int CurrentIndex
        {
            get { return _currentIndex; }
            set { SetProperty(ref _currentIndex, value); }
        }


        private Clock _clock = new Clock();
        public Clock Clock
        {
            get => _clock;
            set => _clock = value;
        }

        #endregion


        #region Methods

        void Timer_Tick(object? sender, EventArgs e)
        {
            _clock.Update();
        }


        #endregion

        #region Commands


        private DelegateCommand? _previousCommand;

        public DelegateCommand PreviousCommand =>
            _previousCommand ?? (_previousCommand = new DelegateCommand(ExecutePreviousCommand, CanExecutePreviousCommand))
            .ObservesProperty(() => CurrentIndex);

        void ExecutePreviousCommand() {
            if (CurrentIndex > 0) {
                --CurrentIndex;
            }

        }

        bool CanExecutePreviousCommand()
        {
            return CurrentIndex > 0;
        }

        void ExecuteCloseCommand()
        {
            Application.Current.MainWindow.Close();
        }

        private DelegateCommand? _nextCommand;
        public DelegateCommand NextCommand => _nextCommand ??
                                              (_nextCommand = new DelegateCommand(ExecuteNextCommand,
                                                  CanExecuteNextCommand))
                                              .ObservesProperty(() => CurrentIndex);

        void ExecuteNextCommand()
        {
            if (CurrentIndex < _agents.Count - 1)
                ++CurrentIndex;
        }

        bool CanExecuteNextCommand()
        {
            return (CurrentIndex < _agents.Count - 1);
        }

        private DelegateCommand? _addCommand;

        public DelegateCommand AddCommand => _addCommand ??
                                             (_addCommand = new DelegateCommand(ExecuteAddCommand))
                                             .ObservesProperty(() => CurrentIndex);

        void ExecuteAddCommand()
        {
            _agents.Add(new Agent());
            CurrentIndex = _agents.Count - 1;
        }

        private DelegateCommand? _deleteCommand;

        public DelegateCommand DeleteCommand => _deleteCommand ??
                                                   (_deleteCommand = new DelegateCommand(DeleteAgent,
                                                       CanExecuteDeleteCommand)).ObservesProperty(() => CurrentIndex);

        private void DeleteAgent()
        {
            if (CurrentAgent != null)
                _agents.Remove(CurrentAgent);
        }

        bool CanExecuteDeleteCommand()
        {
            return _agents.Count > 0 && CurrentIndex >= 0;
        }

        private DelegateCommand? _closeCommand;
        public DelegateCommand CloseCommand => _closeCommand ??
                                               (_closeCommand = new DelegateCommand(ExecuteCloseCommand));

        private DelegateCommand<string>? _colorCommand;

        public DelegateCommand<string> ColorCommand => _colorCommand ??
                                               (_colorCommand = new DelegateCommand<string>(ExecuteColorCommand));
        void ExecuteColorCommand(string colorStr)
        {
            SolidColorBrush newBrush = SystemColors.WindowBrush;
            try
            {
                if (colorStr != null)
                {
                    if (colorStr != "Default")
                        newBrush = new SolidColorBrush((Color)ColorConverter.ConvertFromString(colorStr));
                }
            }
            catch (Exception)
            {
                MessageBox.Show("Unknown color name, default color is used, Program error!");

            }

            Application.Current.Resources["BackGroundBrush"] = newBrush;
        }

        #endregion
    }
}
