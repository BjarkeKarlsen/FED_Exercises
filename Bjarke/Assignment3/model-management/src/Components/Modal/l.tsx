import { useState } from "react";
import InputField from "../InputField";
import Heading from "../../Layout/Heading";
import { useRegister } from "../../mutation/Model/postRegister";
import type { AccountRegisterDto } from "../../../interfaces/Account";

export default function CreateModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const model: AccountRegisterDto = {
      email: email,
      password: password,
    };
    register(model);
  };

  return (
    <div>
      <div>
        <Heading text={"Create Model"} />
      </div>
      <form>
        <label>Email</label>
        <input
          type="text"
          required
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Signup</label>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
