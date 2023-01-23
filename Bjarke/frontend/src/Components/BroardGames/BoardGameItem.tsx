//import getJobList from "../../queries/Jobs";

import { Link } from "react-router-dom";
import { BoardGame } from "../../../interfaces/BoardGame";
import Moment from "moment";

const GameBoardItem = ({ game }: { game: BoardGame }) => {
  Moment.locale("dk");
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col ">
      <Link
        className="w-full block p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-green-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        to={`/game/${game.id}`}
      >
        <h1>Game: {game.name}</h1>
        <h3>Publication Year: {Moment(game.publicationYear).format("LLLL")}</h3>
        <h3>Acquisition Date: {game.acquisitionDate}</h3>
        <h3>
          Players: {game.playersMin} - {game.playersMax}
        </h3>
        <h3>Game Time: {game.playTime}</h3>
        <h3>Age: {game.minimumAge} </h3>
        <h3>Available: {game.countAvailable} </h3>
        <h3>Borrowed: {game.countInUse} </h3>
        <h3>Rating: {game.rating} </h3>
        <h3>Rates: {game.countRatings} </h3>
      </Link>
    </div>
  );
};

export default GameBoardItem;
