import GetGameList from "../queries/BoardGames";
import LoadingSpinner from "../Components/LoadingSpinner";
import GamesList from "../Components/BroardGames/GamesList";

const GamePage = () => {
  const { data: gamesData, isLoading, isError, error } = GetGameList();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      {" "}
      <GamesList boardGames={gamesData?.data} />{" "}
    </>
  );
};

export default GamePage;
