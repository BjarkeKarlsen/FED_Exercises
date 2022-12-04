import { ChangeEvent, useState } from "react";
import InputField from "../InputField";
import Heading from "../../Layout/Heading";
import { useRegister } from "../../mutation/Manager/PostManager";
import type { ManagerRegisterDto } from "../../../interfaces/Manager";
import { Label } from "../ModalComponents/Label";
import Button from "../Button";
import ModalHeader from "../ModalComponents/Header";

const CreateManager = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const manager: ManagerRegisterDto = {
      email: email,
      password: password,
      firstName: firstname,
      lastName: lastname,
    };
  };
  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <ModalHeader text={"Create Manager"} />
        <form className="flex flex-col justify-center">
          <div className=" inline-flex justify-between ">
            <Label text={"First Name"} />
            <InputField
              type="text"
              required
              placeholder="John"
              value={firstname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFirstname(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Last Name"} />
            <InputField
              type="text"
              required
              placeholder="Doe"
              value={lastname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastname(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Email"} />
            <InputField
              type="text"
              required
              placeholder="email@email.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Password"} />
            <InputField
              type="password"
              required
              placeholder="******"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default CreateManager;
