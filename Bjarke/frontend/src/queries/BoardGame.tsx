import { useQuery, useQueryClient } from "react-query";
import { request } from "../utils/Axios-utils";

const fetchModelboardGames = async ({ queryKey }: { queryKey: Array<any> }) => {
  const id = queryKey[1];
  const response = await request({ url: `boardGames/${id}`, method: "get" });
  console.log(response.status);
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }
  return response;
};

const GetBoardGame = (id: number) => {
  const queryClient = useQueryClient();
  return useQuery([`boardGameKey`, id], fetchModelboardGames, {
    initialData: () => {
      const boardGame = queryClient
        .getQueriesData("boardGamesKey")
        ?.find((boardGame: any) => boardGame.id === id);

      if (boardGame) {
        return { data: boardGame };
      } else {
        return undefined;
      }
    },
  });
};

export default GetBoardGame;
