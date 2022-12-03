import GetModelList from "../queries/Model";
import ModelContent from "../Components/Model/ModelContent";

const ModelPage = () => {
  const { data: modelList } = GetModelList();
  return (
    <>
      <ModelContent model={modelList} />
    </>
  );
};

export default ModelPage;
