import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { AccountLoginDto } from "../../../interfaces/Account";

export const login = async (data: AccountLoginDto) => {
  return await request({
    url: `account/login`,
    method: "POST",
    data: data,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: () => {
      toast.success(`Model created successfully`);
    },
    onError: (error) => {
      toast.error("Failed to create model");
    },
  });
};
