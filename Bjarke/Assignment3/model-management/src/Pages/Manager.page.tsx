import ManagerContent from "../Components/Management/ManagerContent";
import GetManagerList from "../queries/Manager";

const Mananger = () => {
  const { data: managerData } = GetManagerList();
  return (
    <>
      <ManagerContent managerData={managerData} />
    </>
  );
};

export default Mananger;
