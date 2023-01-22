import { ManagerRegisterDto } from "../../../interfaces/Manager";

const ManagerItem = ({ manager }: { manager: any }) => {
  return (
    <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4 ">
      <h3>
        Name: {manager.firstName} {manager.lastName}
      </h3>
      <h3>Email: {manager.email}</h3>
    </div>
  );
};

export default ManagerItem;
