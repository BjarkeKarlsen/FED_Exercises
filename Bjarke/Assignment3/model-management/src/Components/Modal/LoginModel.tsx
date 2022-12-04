import { ChangeEvent, useState } from "react";
import InputField from "../InputField";
import { useLogin } from "../../mutation/Account/Login";
import type { AccountLoginDto } from "../../../interfaces/Account";
import Button from "../Button";

const CreateModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [sumbitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);

  const { mutate: login } = useLogin();

  const handleSubmit = () => {
    const model: AccountLoginDto = {
      email: email,
      password: password,
    };
    login(model);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center w-2/3">
        <h2>Create Model </h2>
        <form className="flex flex-col justify-center">
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Password</label>
          <InputField
            text-sm
            type="password"
            required
            placeholder="******"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default CreateModel;
