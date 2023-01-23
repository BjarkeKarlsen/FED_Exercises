import { useState } from "react";
import Heading from "../../Layout/Heading";
import TextButton from "../Button";
import Modal from "../ModalComponents/BiggerModal";
//import JobItem from "./JobItem";
import CreateBoardGame from "./ModalBoardGame";
import type { BoardGame } from "../../../interfaces/BoardGame";
import useAuth from "../../Middelware/useAuth";
import BoardGameItem from "./BoardGameItem";

const GamesList = ({ boardGames }: { boardGames: BoardGame[] }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Heading text={"Boardgames"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4">
        <TextButton onClick={() => setShowModal(true)} text={"Boardgame Job"} />
        <div className="text-3 font-bold underline ">
          <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
            <CreateBoardGame />
          </Modal>
        </div>

        <div className="flex flex-wrap justify-center">
          {boardGames?.map((game: BoardGame) => (
            <div
              key={game.id}
              className="rounded bg-white shadow-lg  m-4 flex flex-wrap justify-center"
            >
              <BoardGameItem game={game} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesList;
