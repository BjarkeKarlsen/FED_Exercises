import { ManagerRegisterDto } from "../../../interfaces/Manager";
import ManagerItem from "./ManagerItem";

const ManagerList = ({
  managerData,
}: {
  managerData: ManagerRegisterDto[];
}) => {
  return (
    <>
      {managerData?.map((manager: ManagerRegisterDto, index) => (
        <div
          key={index}
          className="rounded bg-white shadow-lg md:w-1/3 m-4 flex flex-col justify-center"
        >
          <ManagerItem manager={manager} />
        </div>
      ))}
    </>
  );
};

export default ManagerList;

// email: string;
// firstName: string;
// lastName: string;
// password: string;
