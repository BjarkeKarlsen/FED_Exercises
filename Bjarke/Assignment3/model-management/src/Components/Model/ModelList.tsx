import { ModelDto } from "../../../interfaces/Model";
import ModelItem from "./ModelItem";

const ModelList = ({ model }: { model: ModelDto[] }) => {
  return (
    <>
      {model?.map((modelItem: ModelDto, index) => (
        <div
          key={index}
          className="rounded bg-white shadow-lg md:w-1/3 m-4 flex flex-col justify-center"
        >
          <ModelItem model={modelItem} />
        </div>
      ))}
    </>
  );
};

export default ModelList;
