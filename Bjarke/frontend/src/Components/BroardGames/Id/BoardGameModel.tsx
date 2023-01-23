import { BoardGame } from "../../../../interfaces/BoardGame";
import Moment from "moment";
import TextButton from "../../Button";
import { useState } from "react";
import Modal from "../../ModalComponents/Modal";
import UpdateRatingModal from "./UpdateRatingModal";
import UpdateBorrow from "./UpdateBorrow";

const BoardGameModel = ({ game }: { game: BoardGame }) => {
  Moment.locale("dk");
  const [showModal, setShowModal] = useState(false);
  const [showBorrow, setShowBorrow] = useState(false);

  return (
    <>
      <TextButton onClick={() => setShowModal(true)} text={"Rate Boardgame"} />
      <div className="text-3 font-bold underline ">
        <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
          <UpdateRatingModal boardgame={game} />
        </Modal>
      </div>
      <TextButton
        onClick={() => setShowBorrow(true)}
        text={"Borrow Boardgame"}
      />
      <div className="text-3 font-bold underline ">
        <Modal IsVisible={showBorrow} onClose={() => setShowBorrow(false)}>
          <UpdateBorrow boardgame={game} />
        </Modal>
      </div>
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
