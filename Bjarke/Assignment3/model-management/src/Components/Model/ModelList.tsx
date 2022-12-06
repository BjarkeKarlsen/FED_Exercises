import { ModelDto } from "../../../interfaces/Model";
import ModelItem from "./ModelItem";

const ModelList = ({ model }: { model: any[] }) => {
  console.log(model);
  return (
    <>
      {model?.map((modelItem: any, index: number) => (
        <div
          key={index}
          className="rounded bg-white shadow-lg  m-4 flex flex-col justify-start"
        >
          <ModelItem model={modelItem} />
        </div>
      ))}
    </>
  );
};

export default ModelList;
