import { ChangeEvent, useState } from "react";
import InputField from "../InputField";
//import { useLogin, useNotify } from "react-admin"; //Notification
import { Label } from "../Label";
import Button from "../Button";
import type { AccountLoginDto } from "../../../interfaces/Account";
import { useLogin } from "../../mutation/Account/Login";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login } = useLogin();
  //const notify = useNotify();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userLogin: AccountLoginDto = {
      email: username,
      password: password,
    };
    login(userLogin);
    // login({ username, password }).catch(() =>
    //   notify("Invalid email or password")
    // );
  };
  return (
    <div className="flex flex-col w-1/3 justify-center">
      <div className="flex justify-center">
        <img src="/logo.png" alt="Fattylee" width="60%" height="50%" />
      </div>
      <form className="flex flex-col justify-center">
        <div className=" inline-flex justify-center ">
          <Label text={"Email"} />
          <InputField
            type="text"
            required
            placeholder="email"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </div>
        <div className=" inline-flex justify-center ">
          <Label text={"Password"} />
          <InputField
            type="Password"
            required
            placeholder="********"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="flex justify-center">
          <Button onClick={handleSubmit} text={"Log-in"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
