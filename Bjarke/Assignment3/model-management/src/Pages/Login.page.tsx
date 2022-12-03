import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../Components/InputField";
import Heading from "../Layout/Heading";
import { useLogin, useNotify, Notification } from "react-admin";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid email or password")
    );
  };

  return (
    <div className="md:min-h-[70%]">
      <Heading text={"Login"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex p-4 justify-center ">
        <form className="">
          <label className="mx-4">
            <p>Username</p>
            <input
              className="m-4 md:mx-4 border rounded border-grey-300"
              type="text"
              required
              placeholder="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="mx-4">
            <p>Password</p>
            <input
              className="m-4 md:mx-4 border rounded border-grey-300"
              type="Password"
              required
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button
              className="mx-auto md:mx-4 my-4 bg-transparent font-semibold hover:bg-green-400 text-green-400 hover:text-white  py-2 px-4 border border-green-400 hover:border-transparent rounded m-4 "
              onClick={handleSubmit}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
/*
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};*/
