using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using AgentAssignment;

namespace AgentApp
{
    public class MainWindowViewModel: INotifyPropertyChanged
    {
        ObservableCollection<Agent> agents;

        public MainWindowViewModel()
        {
            agents = new ObservableCollection<Agent>();
            agents.Add(new Agent() { ID = "001", CodeName = "Nina", Speciality = "Assasination", Assignment = "UpperVolta" });
            agents.Add(new Agent() { ID = "002", CodeName = "Roger", Speciality = "Martiny", Assignment = "Goldfinger" });
            CurrentAgent = agents[0];

        }

        #region Properties
        Agent currentAgent = null;
        public Agent CurrentAgent
        {
            get { return currentAgent; }
            set
            {
                if (currentAgent != value)
                {
                    currentAgent = value;
                    Notify();
                }
            }
        }

        public ObservableCollection<Agent> Agents
        {
            get
            {
                return agents;
            }
        }

        #endregion

        #region Methods

        public void AddNewAgent()
        {
            agents.Add(new Agent());
        }
        #endregion

        #region INotifyPropertyChanged implementation
        public event PropertyChangedEventHandler PropertyChanged;
        protected void Notify([CallerMemberName] string propName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propName));
        }
        #endregion

    }
}
