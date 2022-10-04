using System;
using Prism.Mvvm;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Configuration;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using AgentApp.Models;
using Prism.Commands;
using System.Windows;
using System.Windows.Input;
using System.Windows.Threading;

namespace AgentApp.ViewModels
{
    public class MainWindowViewModel: BindableBase
    {
        ObservableCollection<Agent> agents = new ObservableCollection<Agent>();
        DispatcherTimer timer = new DispatcherTimer();

        public MainWindowViewModel()
        {   
                agents.Add(new Agent("001", "Nina", "Assasination", "UpperVolta"));
                agents.Add(new Agent("002", "Roger", "Martiny", "Goldfinger"));
                CurrentAgent = agents[0];

                timer.Interval = TimeSpan.FromSeconds(1);
                timer.Tick += new EventHandler(Timer_Tick);
                timer.Start();
            
            // agents = new ObservableCollection<Agent>();
            //

        }


        #region Properties

        public ObservableCollection<Agent> Agents
        {
            get { return agents; }
            set { SetProperty(ref agents, value); }
        }

        Agent currentAgent = null;
        public Agent CurrentAgent
        {
            get { return currentAgent; }
            set
            {
                SetProperty(ref currentAgent, value);
            }
        }

        private int currentIndex;
        public int CurrentIndex
        {
            get { return currentIndex; }
            set
            {
                SetProperty(ref currentIndex, value);
            }
        }

        // No need to notify as it will never change
        Clock clock = new Clock();
        public Clock Clock { get => clock; set => clock = value; }
        #endregion

        #region Methods

        void Timer_Tick(object? sender, EventArgs e)
        {
            clock.Update();
        }


        #endregion

        #region Methods

        public void AddNewAgent()
        {
            agents.Add(new Agent());
        }

        #endregion

        #region Commands
        // Previous Command
        private DelegateCommand? _previousCommand;
        public DelegateCommand PreviousCommand => _previousCommand ?? (_previousCommand = new DelegateCommand(ExecutePreviousCommand,CanExecutePreviousCommand).ObservesProperty(() => CurrentIndex));
            void ExecutePreviousCommand()
        {
            if (currentIndex > 0)
                --currentIndex;
        }
            bool CanExecutePreviousCommand()
        {
            if (currentIndex > 0)
                return true;
            else
                return false;

        }

        // Next Command
        private DelegateCommand? _nextCommand;
        public DelegateCommand NextCommand => _nextCommand ?? (_nextCommand = new DelegateCommand(ExecuteNextCommand, CanExecuteNextCommand).ObservesProperty(() => CurrentIndex));
        void ExecuteNextCommand()
        {
            if (currentIndex < (Agents.Count-1))
                ++currentIndex;
        }
        bool CanExecuteNextCommand()
        {
            if (currentIndex < (Agents.Count-1))
                return true;
            else
                return false;

        }

        //Add Command

        private DelegateCommand? _addCommand;
        public DelegateCommand AddCommand => _addCommand ?? (_addCommand = new DelegateCommand(ExecuteAddCommand).ObservesProperty(() => CurrentIndex));
        void ExecuteAddCommand()
        {
            Agents.Add(new Agent());
            CurrentIndex = Agents.Count - 1;
        }

        
        //DeleteCommand
        private DelegateCommand? _deleteCommand;
        public DelegateCommand DeleteCommand => _deleteCommand ?? (_deleteCommand = new DelegateCommand(ExecuteDeleteCommand, CanExecuteDeleteCommand).ObservesProperty(() => CurrentIndex));
        void ExecuteDeleteCommand()
        {
            Agents.RemoveAt(CurrentIndex);
        }
        private bool CanExecuteDeleteCommand()
        {
            if (Agents.Count > 0 && CurrentIndex>=0)
                return true;
            else
                return false;

        }

        private DelegateCommand? closeAppCommand;
        public DelegateCommand CloseAppCommand =>
            closeAppCommand ?? (closeAppCommand = new DelegateCommand(ExecuteCloseAppCommand));

        void ExecuteCloseAppCommand()
        {
            Application.Current.MainWindow.Close();
        }
        #endregion



    }
}
