import { useState } from "react";
import InputField from "../Components/InputField";

export default function CreateModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sumbitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Create Model</h1>
      </div>
      <form>
        <label>Email</label>
        <input
          type="text"
          required={false}
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
