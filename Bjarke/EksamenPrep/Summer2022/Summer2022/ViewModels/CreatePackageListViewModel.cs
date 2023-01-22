using Summer2022.Models;

namespace Summer2022.ViewModels
{
    internal class CreatePackageListViewModel
    {
        private string _titel;
        private PackingList _packingList;

        public CreatePackageListViewModel(string titel, PackingList packingList)
        {
            _titel = titel;
            _packingList = packingList;
        }


    }
}