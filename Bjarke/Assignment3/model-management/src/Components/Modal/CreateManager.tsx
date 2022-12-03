import { ChangeEvent, useState } from "react";
import InputField from "../InputField";
import Heading from "../../Layout/Heading";
import { useRegister } from "../../mutation/Manager/postRegister";
import type { ManagerRegisterDto } from "../../../interfaces/Manager";

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
      <div className="flex flex-col justify-center w-2/3">
        <Heading text={"Create Manager"} />
      </div>
      <form>
        <label>First Name</label>
        <InputField
          type="text"
          required
          placeholder="John"
          value={firstname}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstname(e.target.value)
          }
        />
        <label>Last Name</label>
        <InputField
          type="text"
          required
          placeholder="Doe"
          value={lastname}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastname(e.target.value)
          }
        />
        <label>Email</label>
        <InputField
          type="text"
          required
          placeholder="email@email.com"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label>Password</label>
        <InputField
          type="password"
          required
          placeholder="******"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <label>Create</label>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateManager;
