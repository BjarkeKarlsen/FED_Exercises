import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import { BoardGameDto } from "../../../interfaces/BoardGame";

export const postBoardGame = async (data: BoardGameDto) => {
  return await request({
    url: `boardGames`,
    method: "POST",
    data: data,
  });
};

export const usePostBoardGame = () => {
  const queryClient = useQueryClient();
  return useMutation(postBoardGame, {
    onSuccess: () => {
      toast.success(`Game created successfully`);
    },
    onError: (error) => {
      toast.error("Failed to create game");
    },
    onSettled: () => {
      queryClient.invalidateQueries("boardGamesKey");
    },
  });
};
