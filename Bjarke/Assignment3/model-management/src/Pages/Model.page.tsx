import GetModelList from "../queries/Model";
import ModelContent from "../Components/Model/ModelContent";
import LoadingSpinner from "../Components/LoadingSpinner";

const ModelPage = () => {
  const { data: modelList, isLoading, isError, error } = GetModelList();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <ModelContent model={modelList} />
    </>
  );
};

export default ModelPage;
