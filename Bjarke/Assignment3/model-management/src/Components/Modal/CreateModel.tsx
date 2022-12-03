import { useState } from "react";
import InputField from "../InputField";
import Heading from "../../Layout/Heading";
import { useRegister } from "../../mutation/Model/postRegister";
import type { ModelRegisterDto } from "../../../interfaces/Model";
import Button from "../Button";

const CreateModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sumbitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const model: ModelRegisterDto = {
      email: email,
      password: password,
    };
    register(model);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center w-2/3">
        <h2>Create Model </h2>
        <form className="flex flex-col justify-center">
          <label className="mx-4 text-sm">Email</label>
          <input
            className="m-4 md:mx-4 border rounded border-grey-300 text-sm"
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mx-4 text-sm">Password</label>
          <input
            className="m-4 md:mx-4 border rounded border-grey-300"
            text-sm
            type="password"
            required
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default CreateModel;
