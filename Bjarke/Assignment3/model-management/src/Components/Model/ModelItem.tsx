import { ModelDto } from "../../../interfaces/Model";

const ModelItem = ({ model }: { model: any }) => {
  console.log("job", model);
  return (
    <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg  p-4  justify-start">
      <h3>
        <b>Name: </b>
        {model.firstName} {model.lastName}
      </h3>
      <h3>
        <b>Phone:</b> {model.phoneNo}
      </h3>
      <h3>
        <b>Email: </b>
        {model.email}
      </h3>
      <h3>
        <b>Address:</b> {model.addresLine1}
      </h3>
      <h3>
        <b>Address 2: </b>
        {model.addresLine2}
      </h3>
      <h3>
        <b>City: </b>
        {model.city} {model.zip}
      </h3>
      <h3>
        <b>Nationality:</b> {model.nationality}
      </h3>
      <h3>
        <b>Birthdate:</b> {model.birthDate}
      </h3>
      <h3>
        <b>Height: </b>
        {model.height}
      </h3>
      <h3>
        <b>Shoe Size: </b>
        {model.shoeSize}
      </h3>
      <h3>
        <b>Hair Color:</b> {model.hairColor}
      </h3>
      <h3>
        <b>Eye Color:</b> {model.eyeColor}
      </h3>
      <h3>
        <b>Comments:</b> {model.comments}
      </h3>
    </div>
  );
};

export default ModelItem;
