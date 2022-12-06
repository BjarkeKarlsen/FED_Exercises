import { useMutation } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import parseJwt from "../../utils/jwtParse";
import useAuth from "../../Middelware/useAuth";

import type { AccountLoginDto } from "../../../interfaces/Account";
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NewLineKind } from "typescript";

export const login = async (data: AccountLoginDto) => {
  localStorage.setItem("user", data.email);
  localStorage.setItem("pwd", data.password);
  const response = await request({
    url: `account/login`,
    method: "POST",
    data: data,
  });

  return response;
};

export const useLogin = () => {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  return useMutation(login, {
    onSuccess: (account) => {
      const accessToken = account.data.jwt;
      const roles = parseJwt(account.data.jwt)[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];
      localStorage.setItem("token", account.data.jwt);
      localStorage.setItem("role", roles);

      const user = localStorage.getItem("user");
      const pwd = localStorage.getItem("pwd");

      setAuth([user, pwd, roles, accessToken]);
    },
    onError: (error) => {
      toast.error("Failed to login");
    },
    onSettled: () => {
      toast.success("Welcome");
      console.log(auth);
      navigate(from, { replace: true });
    },
  });
};
