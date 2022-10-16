using TheDebtBook.Models;
using System.Collections.ObjectModel;
using System.IO;
using System.Xml.Serialization;


namespace TheDebtBook.Data
{
    public class Repository
    {
        internal static ObservableCollection<Account> ReadFile(string fileName)
        {
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<Account>));
            TextReader reader = new StreamReader(fileName);
            var account = (ObservableCollection<Account>)serializer.Deserialize(reader);
            reader.Close();
            return account;
        }
        internal static void SaveFile(string fileName, ObservableCollection<Account> account)
        {
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<Account>));
            TextWriter writer = new StreamWriter(fileName);
            serializer.Serialize(writer, account);
            writer.Close();
        }
    }
}