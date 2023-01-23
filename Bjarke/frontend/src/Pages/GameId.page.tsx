import { useParams } from "react-router-dom";
import BoardGameModel from "../Components/BroardGames/Id/BoardGameModel";
import LoadingSpinner from "../Components/LoadingSpinner";
import GetBoardGame from "../queries/BoardGame";

const GameIdPage = () => {
  const { gameId } = useParams();
  const {
    data: gameData,
    isLoading,
    isError,
    error,
  } = GetBoardGame(Number(gameId));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }
  console.log(gameData);
  return (
    <>
      {" "}
      <BoardGameModel game={gameData?.data} />{" "}
    </>
  );
};

export default GameIdPage;
