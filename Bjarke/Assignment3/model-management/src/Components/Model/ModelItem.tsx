import { ModelDto } from "../../../interfaces/Model";

const ModelItem = ({ model }: { model: any }) => {
  console.log("job", model);
  return (
    <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg p-4 ">
      <h3 className="text-left">
        <b>Name: </b>
        {model.firstName} {model.lastName}
      </h3>
      <h3 className="text-left">
        <b>Phone:</b> {model.phoneNo}
      </h3>
      <h3 className="text-left">
        <b>Email: </b>
        {model.email}
      </h3>
      <h3 className="text-left">
        <b>Address:</b> {model.addresLine1}
      </h3>
      <h3 className="text-left">
        <b>Address 2: </b>
        {model.addresLine2}
      </h3>
      <h3 className="text-left">
        <b>City: </b>
        {model.city} {model.zip}
      </h3>
      <h3 className="text-left">
        <b>Nationality:</b> {model.nationality}
      </h3>
      <h3 className="text-left">
        <b>Birthdate:</b> {model.birthDate}
      </h3>
      <h3 className="text-left">
        <b>Height: </b>
        {model.height}
      </h3>
      <h3 className="text-left">
        <b>Shoe Size: </b>
        {model.shoeSize}
      </h3>
      <h3 className="text-left">
        <b>Hair Color:</b> {model.hairColor}
      </h3>
      <h3 className="text-left">
        <b>Eye Color:</b> {model.eyeColor}
      </h3>
      <h3 className="text-left">
        <b>Comments:</b> {model.comments}
      </h3>
    </div>
  );
};

export default ModelItem;
