import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../Components/InputField";
import Heading from "../Layout/Heading";
import { useLogin, useNotify, Notification } from "react-admin";

const LoginPage = ({}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-wrapper">
      <Heading text={"Login"} />
      <form className="">
        <label>
          <p>Username</p>
          <InputField
            type="text"
            required
            placeholder="email"
            value={username}
            onChange={(e: {
              target: { value: React.SetStateAction<undefined> };
            }) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <InputField
            type="Password"
            required
            placeholder="********"
            value={password}
            onChange={(e: {
              target: { value: React.SetStateAction<undefined> };
            }) => setPassword(e.target.value)}
          />
          <input type="password" />
        </label>
        <div>
          <button
            className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-4 "
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
/*
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};*/
