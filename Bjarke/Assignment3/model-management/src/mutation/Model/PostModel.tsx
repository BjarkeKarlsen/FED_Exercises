import { useMutation } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { ModelRegisterDto } from "../../../interfaces/Model";

export const postModel = async (data: ModelRegisterDto) => {
  return await request({
    url: `Models`,
    method: "POST",
    data: data,
  });
};

export const usePostModel = () => {
  return useMutation(postModel, {
    onSuccess: () => {
      toast.success(`Model created successfully`);
    },
    onError: (error) => {
      toast.error("Failed to create model");
    },
  });
};
