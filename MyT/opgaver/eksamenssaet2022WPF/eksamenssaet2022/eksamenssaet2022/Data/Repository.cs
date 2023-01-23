using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using eksamenssaet2022.Models;

namespace eksamenssaet2022.Data
{
    public class Repository
    {
        internal static ObservableCollection<PackingList> ReadFile(string fileName)
        {
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<PackingList>));
            TextReader reader = new StreamReader(fileName);
            var packinglist = (ObservableCollection<PackingList>)serializer.Deserialize(reader);
            reader.Close();
            return packinglist;
        }
        internal static void SaveFile(string fileName, ObservableCollection<PackingList> packinglists)
        {
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<PackingList>));
            TextWriter writer = new StreamWriter(fileName);
            serializer.Serialize(writer, packinglists);
            writer.Close();
        }
    }
}

