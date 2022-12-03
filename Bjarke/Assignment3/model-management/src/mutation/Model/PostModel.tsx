import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { ModelRegisterDto } from "../../../interfaces/Model";

export const register = async (data: ModelRegisterDto) => {
  return await request({
    url: `Models`,
    method: "POST",
    data: data,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation(register, {
    onSuccess: () => {
      toast.success(`Model created successfully`);
    },
    onError: (error) => {
      toast.error("Failed to create model");
    },
  });
};
