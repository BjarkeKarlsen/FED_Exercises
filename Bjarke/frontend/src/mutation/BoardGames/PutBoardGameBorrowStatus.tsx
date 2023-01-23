import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";

import {
  BoardGameBorrowDto,
  BoardGameBorrowIdDto,
} from "../../../interfaces/BoardGame";

export const boardGameUpdateBorrowStatus = async (
  game: BoardGameBorrowIdDto
) => {
  const data: BoardGameBorrowDto = {
    countAvailable: game.countAvailable,
    countInUse: game.countInUse,
  };
  console.log(game.id);
  return await request({
    url: `boardGames/${game.id}`,
    method: "PUT",
    data: data,
  });
};

export const useBoardGameUpdateBorrowStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(boardGameUpdateBorrowStatus, {
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
