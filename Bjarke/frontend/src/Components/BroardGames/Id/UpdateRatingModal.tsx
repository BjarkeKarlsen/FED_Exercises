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

  const handleSubmit = () => {
    // const game: BoardGameRateIdDto = {
    //   id: boardgame.id,
    //   rating: rating + boardgame.rating,
    //   countRatings: boardgame.countRatings,
    // };
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
      countAvailable: boardgame.countAvailable,
      countInUse: boardgame.countInUse,
      rating: boardgame.rating + rating,
      countRatings: boardgame.countRatings + 1,
    };
    register(game);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <ModalHeader text={"Boardgame Job"} />
        <form className="flex flex-col justify-center">
          <div className=" inline-flex justify-between ">
            <Label text={"Rate"} />
            <NumberField
              required
              placeholder="0"
              value={rating}
              min={0}
              max={5}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRating(e.target.valueAsNumber)
              }
            />
          </div>
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
