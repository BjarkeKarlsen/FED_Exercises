// import type { boardGameRegisterDto } from "../../interfaces/boardGame";
import { useQuery } from "react-query";
import { request } from "../utils/Axios-utils";

const fetchAllboardGames = async () => {
  const response = await request({ url: "boardGames", method: "get" });

  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }

  return response;
};

const GetBoardGameList = () => {
  return useQuery("boardGamesKey", fetchAllboardGames, {
    refetchOnWindowFocus: false,
  });
};

export default GetBoardGameList;
