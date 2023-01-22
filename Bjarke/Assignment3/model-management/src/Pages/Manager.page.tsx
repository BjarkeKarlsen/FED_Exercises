import LoadingSpinner from "../Components/LoadingSpinner";
import ManagerContent from "../Components/Management/ManagerContent";
import GetManagerList from "../queries/Manager";

const Mananger = () => {
  const { data: managerData, isLoading, isError, error } = GetManagerList();
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <ManagerContent managerData={managerData} />
    </>
  );
};

export default Mananger;
