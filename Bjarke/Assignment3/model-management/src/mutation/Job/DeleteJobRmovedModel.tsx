import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { JobModelDto } from "../../../interfaces/Job";

export const jobDeleteModel = async (data: JobModelDto) => {
  return await request({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "DELETE",
    data: data,
  });
};

export const useJobDeleteModel = () => {
  const queryClient = useQueryClient();
  return useMutation(jobDeleteModel, {
    onSuccess: () => {
      toast.success(`Deleted model from job`);
    },
    onError: (error) => {
      toast.error("Failed to delete model from job");
    },
    onSettled: () => {
      queryClient.invalidateQueries("jobsKey");
    },
  });
};
