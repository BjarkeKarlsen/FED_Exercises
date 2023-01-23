import { useState } from "react";
import InputField from "../InputField";
import { ChangeEvent } from "react";
import type { BoardGameDto } from "../../../interfaces/BoardGame";
import {
  usePostBoardGame,
  postBoardGame,
} from "../../mutation/BoardGames/PostBoardGame";
import ModalHeader from "../ModalComponents/Header";
import { Label } from "../ModalComponents/Label";
import Button from "../Button";
import NumberField from "../NumberField";

export default function CreateBoardGame() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [acquisitionDate, setAcquisitionDate] = useState("");
  const [playersMin, setPlayersMin] = useState<number>(0);
  const [playersMax, setPlayersMax] = useState<number>(0);
  const [playTime, setPlayTime] = useState("");
  const [minimumAge, setMinimumAge] = useState("");
  const [countAvailable, setCountAvailable] = useState<number>(0);
  const [countInUse, setCountInUse] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  const { mutate: register } = usePostBoardGame();

  const handleSubmit = () => {
    const game: BoardGameDto = {
      name: name,
      description: description,
      publicationYear: publicationYear,
      acquisitionDate: acquisitionDate,
      playersMin: playersMin,
      playersMax: playersMax,
      playTime: playTime,
      minimumAge: minimumAge,
      countAvailable: countAvailable,
      countInUse: countInUse,
      rating: rating,
      countRatings: 0,
    };
    register(game);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <ModalHeader text={"Boardgame Job"} />

        <form className="flex flex-col justify-center">
          <div className=" inline-flex justify-between ">
            <Label text={"Boardgame"} />
            <InputField
              type="text"
              required
              placeholder="Skak"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Spillet foregår..."} />
            <InputField
              type="text"
              required
              placeholder="Skak"
              value={description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Publication Year"} />
            <InputField
              type="date"
              required
              placeholder="2022"
              value={description}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPublicationYear(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Publication Year"} />
            <InputField
              type="date"
              required
              placeholder="2022-01-06"
              value={acquisitionDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAcquisitionDate(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Minimum players"} />
            <NumberField
              required
              placeholder="0"
              value={playersMin}
              min={0}
              max={10}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPlayersMin(e.target.valueAsNumber)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Maximum players"} />
            <NumberField
              required
              placeholder="0"
              value={playersMax}
              min={0}
              max={10}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPlayersMax(e.target.valueAsNumber)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Play time"} />
            <InputField
              type="text"
              required
              placeholder="30-45"
              value={playTime}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPlayTime(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Minimum Age"} />
            <InputField
              type="text"
              required
              placeholder="3"
              value={minimumAge}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMinimumAge(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Available"} />
            <NumberField
              required
              placeholder="0"
              value={countAvailable}
              min={0}
              max={99}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCountAvailable(e.target.valueAsNumber)
              }
            />
          </div>

          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
