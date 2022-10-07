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
            // Create an instance of the XmlSerializer class and specify the type of object to deserialize.
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<Account>));
            TextReader reader = new StreamReader(fileName);
            // Deserialize all the debtors.
            var account = (ObservableCollection<Account>)serializer.Deserialize(reader);
            reader.Close();
            return account;
        }
        internal static void SaveFile(string fileName, ObservableCollection<Account> account)
        {
            // Create an instance of the XmlSerializer class and specify the type of object to serialize.
            XmlSerializer serializer = new XmlSerializer(typeof(ObservableCollection<Account>));
            TextWriter writer = new StreamWriter(fileName);
            // Serialize all the debtors.
            serializer.Serialize(writer, account);
            writer.Close();
        }
    }
}