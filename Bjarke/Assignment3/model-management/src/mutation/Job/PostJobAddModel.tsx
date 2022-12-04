import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import type { JobModelDto } from "../../../interfaces/Job";

export const jobAddModel = async (data: JobModelDto) => {
  return await request({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "POST",
    data: data,
  });
};

export const useJobAddModel = () => {
  const queryClient = useQueryClient();
  return useMutation(jobAddModel, {
    onSuccess: () => {
      toast.success(`Added model to job`);
    },
    onError: (error) => {
      toast.error("Failed to add model to job");
    },
    onSettled: () => {
      queryClient.invalidateQueries("jobsKey");
    },
  });
};
