import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import { BoardGame } from "../../../interfaces/BoardGame";

export const jobDeleteModel = async (data: BoardGame) => {
  return await request({
    url: `boardgame/${data.id}/`,
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
