import { useMutation } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { AccountLoginDto } from "../../../interfaces/Account";

export const login = async (data: AccountLoginDto) => {
  const response = await request({
    url: `account/login`,
    method: "POST",
    data: data,
  });
  console.log(response.data);
  localStorage.setItem("token", response.data.jwt);
  return response;
};

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: () => {
      //toast.success(`Model created successfully`);
    },
    onError: (error) => {
      toast.error("Failed to create model");
    },
  });
};
