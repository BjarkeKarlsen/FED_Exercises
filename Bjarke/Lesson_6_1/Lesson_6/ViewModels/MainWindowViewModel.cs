using System;
using Lesson_6.Model;
using System.Collections.ObjectModel;
using Prism.Commands;
using Prism.Mvvm;
using System.Windows.Media.Animation;
using System.Windows;
using System.Windows.Threading;
using Lesson_6.Models;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using Clock = Lesson_6.Models.Clock;


namespace Lesson_6.ViewModels
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

        public DelegateCommand PreviusCommand =>
            _previousCommand ?? (_previousCommand = new DelegateCommand(ExecutePreviousCommand, CanExecutePreviousCommand))
            .ObservesProperty(() => CurrentIndex);

        //void ExecutePreviousCommand()
        //{
        //    if (CurrentIndex > 0)
        //        --CurrentIndex;
        //}

        //bool CanExecutePreviousCommand()
        //{
        //    if (CurrentIndex > 0) return true;

        //    return false;
        //}

        void ExecutePreviousCommand() {
            if (CurrentIndex > 0) {
                --CurrentIndex;
            }

        }

        bool CanExecutePreviousCommand() {
            if (CurrentIndex > 0) {
                return true;
            }
            else {
                return false;
            }
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
            if (CurrentIndex < _agents.Count - 1) return true;
            return false;
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

        private DelegateCommand? _delegateCommand;

        public DelegateCommand DelegateCommand => _delegateCommand ??
                                                   (_delegateCommand = new DelegateCommand(DeleteAgent,
                                                       CanExecuteDeleteCommand)).ObservesProperty(() => CurrentIndex);

        private void DeleteAgent()
        {
            if (CurrentAgent != null)
                _agents.Remove(CurrentAgent);
        }

        bool CanExecuteDeleteCommand()
        {
            if (_agents.Count > 0 && CurrentIndex >= 0) return true;
            return false;
        }

        private DelegateCommand? _closeCommand;
        public DelegateCommand CloseCommand => _closeCommand ??
                                               (_closeCommand = new DelegateCommand(ExecuteCloseCommand));


        #endregion
    }
}
