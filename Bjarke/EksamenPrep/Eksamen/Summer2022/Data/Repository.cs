using Eksamen.Models;
using System.Collections.ObjectModel;
using System.IO;
using System.Xml.Serialization;

namespace Eksamen.Data;

internal class Repository
{
    internal static ObservableCollection<BoardGame> ReadFile(string fileName)
    {
        XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<BoardGame>));
        TextReader reader = new StreamReader(fileName);
        var boardGame = (ObservableCollection<BoardGame>)serializer.Deserialize(reader);
        reader.Close();
        return boardGame;
    }
    internal static void SaveFile(string fileName, ObservableCollection<BoardGame> boardGame)
    {
        XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<BoardGame>));
        TextWriter writer = new StreamWriter(fileName);
        serializer.Serialize(writer, boardGame);
        writer.Close();
    }
}

