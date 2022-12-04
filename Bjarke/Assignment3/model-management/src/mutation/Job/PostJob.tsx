import { useMutation } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { JobRegisterDto } from "../../../interfaces/Job";

export const register = async (data: JobRegisterDto) => {
  return await request({
    url: `Jobs`,
    method: "POST",
    data: data,
  });
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: () => {
      toast.success(`Job created successfully`);
    },
    onError: (error) => {
      toast.error("Failed to create Job");
    },
  });
};
