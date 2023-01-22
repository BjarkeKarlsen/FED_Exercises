using Summer2022.Models;
using System.Collections.ObjectModel;
using System.IO;
using System.Xml.Serialization;

namespace Summer2022.Data;

internal class Repository
{
    internal static ObservableCollection<PackingList> ReadFile(string fileName)
    {
        XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<PackingList>));
        TextReader reader = new StreamReader(fileName);
        var packingList = (ObservableCollection<PackingList>)serializer.Deserialize(reader);
        reader.Close();
        return packingList;
    }
    internal static void SaveFile(string fileName, ObservableCollection<PackingList> packingList)
    {
        XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<PackingList>));
        TextWriter writer = new StreamWriter(fileName);
        serializer.Serialize(writer, packingList);
        writer.Close();
    }
}

