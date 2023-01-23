import { useState } from "react";
import InputField from "../../InputField";
import { ChangeEvent } from "react";
import type {
  BoardGame,
  BoardGameRateIdDto,
} from "../../../../interfaces/BoardGame";

import ModalHeader from "../../ModalComponents/Header";
import { Label } from "../../ModalComponents/Label";
import Button from "../../Button";
import NumberField from "../../NumberField";
import {
  boardGameUpdateRating,
  useBoardGameUpdateRating,
} from "../../../mutation/BoardGames/PutBoardGameRating";

export default function UpdateRatingModal({
  boardgame,
}: {
  boardgame: BoardGame;
}) {
  const [rating, setRating] = useState<number>(0);

  const { mutate: register } = useBoardGameUpdateRating();

  const handleBorrow = () => {
    if (boardgame.countAvailable > 0) {
      const game: BoardGame = {
        id: boardgame.id,
        name: boardgame.name,
        description: boardgame.description,
        publicationYear: boardgame.publicationYear,
        acquisitionDate: boardgame.acquisitionDate,
        playersMin: boardgame.playersMin,
        playersMax: boardgame.playersMax,
        playTime: boardgame.playTime,
        minimumAge: boardgame.minimumAge,
        countAvailable: boardgame.countAvailable - 1,
        countInUse: boardgame.countInUse + 1,
        rating: boardgame.rating,
        countRatings: boardgame.countRatings,
      };
      register(game);
    }
  };

  const handleReturn = () => {
    if (boardgame.countInUse > 0) {
      //   const game: BoardGameRateIdDto = {
      //     id: boardgame.id,
      //     rating: rating - boardgame.rating,
      //     countRatings: boardgame.countRatings,
      //   };

      const game: BoardGame = {
        id: boardgame.id,
        name: boardgame.name,
        description: boardgame.description,
        publicationYear: boardgame.publicationYear,
        acquisitionDate: boardgame.acquisitionDate,
        playersMin: boardgame.playersMin,
        playersMax: boardgame.playersMax,
        playTime: boardgame.playTime,
        minimumAge: boardgame.minimumAge,
        countAvailable: boardgame.countAvailable + 1,
        countInUse: boardgame.countInUse - 1,
        rating: boardgame.rating,
        countRatings: boardgame.countRatings,
      };
      register(game);
    }
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <ModalHeader text={"Boardgame Job"} />
        <Button text="Borrow" onClick={handleBorrow} />
        <Button text="Return" onClick={handleReturn} />
      </div>
    </div>
  );
}
