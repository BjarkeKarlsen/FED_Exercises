import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";

import { BoardGame } from "../../../interfaces/BoardGame";

export const boardGameUpdateRating = async (data: BoardGame) => {
  return await request({
    url: `boardGames/${data.id}}`,
    method: "PUT",
    data: data,
  });
};

export const useBoardGameUpdateRating = () => {
  const queryClient = useQueryClient();
  return useMutation(boardGameUpdateRating, {
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
