import { BoardGame } from "../../../../interfaces/BoardGame";
import Moment from "moment";

const BoardGameModel = ({ game }: { game: BoardGame }) => {
  Moment.locale("dk");

  return (
    <>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <p>Publication Year: {Moment(game.publicationYear).format("LLLL")}</p>
      <p>Acquisition Date: {game.acquisitionDate}</p>
      <p>Minumin Players: {game.playersMin}</p>
      <p>Maximum Players: {game.playersMax}</p>
      <p>Game Time: {game.playTime}</p>
      <p>Age: {game.minimumAge} </p>
      <p>Available: {game.countAvailable} </p>
      <p>Borrowed: {game.countInUse} </p>
      <p>Rating: {game.rating / game.countRatings} </p>
      <p>Rates: {game.countRatings} </p>
    </>
  );
};

export default BoardGameModel;
