import { ModelDto } from "../../../interfaces/Model";

const ModelItem = ({ model }: { model: ModelDto }) => {
  return (
    <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4">
      <h3>
        Name: {model.firstName} {model.lastName}
      </h3>
      <h3>Phone: {model.phoneNo}</h3>
      <h3>Email: {model.email}</h3>
      <h3>Job:</h3>
      {model?.jobs.map((job: string, index) => (
        <div key={index} className="">
          <p>{job}</p>
        </div>
      ))}
    </div>
  );
};

export default ModelItem;
