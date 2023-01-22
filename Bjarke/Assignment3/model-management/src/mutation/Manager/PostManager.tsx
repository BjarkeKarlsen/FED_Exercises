import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { ManagerRegisterDto } from "../../../interfaces/Manager";

export const register = async (data: ManagerRegisterDto) => {
  return await request({
    url: `managers`,
    method: "POST",
    data: data,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation(register, {
    onSuccess: () => {
      toast.success(`Manager created successfully`);
    },
    onError: (error) => {
      toast.error("Failed to create manager");
    },
    onSettled: () => {
      queryClient.invalidateQueries("managersKey");
    },
  });
};
