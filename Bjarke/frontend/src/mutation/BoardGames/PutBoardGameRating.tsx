import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";

import { BoardGameRateDto, BoardGame } from "../../../interfaces/BoardGame";

export const boardGameUpdateRating = async (game: BoardGame) => {
  // const data: BoardGameRateDto = {
  //   rating: game.rating,
  //   countRatings: game.countRatings,
  // };
  return await request({
    url: `boardGames/${game.id}`,
    method: "PUT",
    data: game,
  });
};

export const useBoardGameUpdateRating = () => {
  const queryClient = useQueryClient();
  return useMutation(boardGameUpdateRating, {
    onSuccess: () => {
      toast.success(`Borrow Status updated`);
    },
    onError: (error) => {
      toast.error("Failed to update Borrow Status");
    },
    onSettled: () => {
      queryClient.invalidateQueries("jobsKey");
    },
  });
};
