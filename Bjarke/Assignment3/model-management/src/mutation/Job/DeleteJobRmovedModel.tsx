import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { JobModel } from "../../../interfaces/Job";

export const register = async (data: JobModel) => {
  return await request({
    url: `Jobs/${data.jobid}/model/${data.modelid}`,
    method: "DELETE",
    data: data,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation(register, {
    onSuccess: () => {
      toast.success(`Deleted model from job`);
    },
    onError: (error) => {
      toast.error("Failed to delete model from job");
    },
  });
};
