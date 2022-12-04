import { ChangeEvent, useState } from "react";
import InputField from "../InputFieldModal";
import ModalHeader from "../ModalComponents/Header";
import { usePostModel } from "../../mutation/Model/PostModel";
import type { ModelRegisterDto } from "../../../interfaces/Model";
import Button from "../Button";
import NumberField from "../NumberField";
import { Label } from "../ModalComponents/Label";

const CreateModel = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [addresLine1, setAddresLine1] = useState<string>("");
  const [addresLine2, setAddresLine2] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [shoeSize, setShoeSize] = useState<number>(0);
  const [hairColor, setHairColor] = useState<string>("");
  const [eyeColor, setEyeColor] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate: postModel } = usePostModel();

  const handleSubmit = () => {
    const model: ModelRegisterDto = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phone,
      addresLine1: addresLine1,
      addresLine2: addresLine2,
      zip: zip,
      city: city,
      country: country,
      birthDate: birthDate,
      nationality: nationality,
      height: height,
      shoeSize: shoeSize,
      hairColor: hairColor,
      eyeColor: eyeColor,
      comments: comments,
      password: password,
    };
    postModel(model);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <ModalHeader text={"Create Model"} />
        <form className="flex flex-col justify-center">
          <div className=" inline-flex justify-between ">
            <Label text={"First Name"} />
            <InputField
              type="text"
              required
              placeholder="John"
              value={firstName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Last Name"} />
            <InputField
              type="text"
              required
              placeholder="Doe"
              value={lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Email"} />
            <InputField
              type="text"
              required
              placeholder="email@gmail.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Phone number"} />
            <InputField
              type="text"
              required
              placeholder="12345678"
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Addresline 1"} />
            <InputField
              type="text"
              required
              placeholder="Tuborg Havnepark 15"
              value={addresLine1}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddresLine1(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Addresline 2"} />
            <InputField
              type="text"
              required={false}
              placeholder="Tuborg Havnepark 15"
              value={addresLine2}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddresLine2(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Zip"} />
            <InputField
              type="text"
              required
              placeholder="email@gmail.com"
              value={zip}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setZip(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"City"} />
            <InputField
              type="text"
              required
              placeholder="Hellerup"
              value={city}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCity(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Country"} />
            <InputField
              type="text"
              required
              placeholder="Danmark"
              value={country}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCountry(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Birthdate"} />
            <InputField
              type="date"
              required
              placeholder="2022-12-03T20:42:51.203Z"
              value={birthDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBirthDate(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Nationality"} />
            <InputField
              type="text"
              required
              placeholder="Danish"
              value={nationality}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNationality(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Height"} />
            <NumberField
              required
              placeholder="183"
              value={height}
              min={60}
              max={230}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHeight(e.target.valueAsNumber)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Shoes size"} />
            <NumberField
              required
              placeholder="42"
              value={shoeSize}
              min={20}
              max={55}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setShoeSize(e.target.valueAsNumber)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Hair Color"} />
            <InputField
              type="text"
              required
              placeholder="Dark Brown"
              value={hairColor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHairColor(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Eye Color"} />
            <InputField
              type="text"
              required
              placeholder="Blue"
              value={eyeColor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEyeColor(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Comments"} />
            <InputField
              type="text"
              required
              placeholder="A commenct"
              value={comments}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setComments(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between">
            <Label text={"Password"} />
            <InputField
              text-sm
              type="password"
              required
              placeholder="******"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default CreateModel;
