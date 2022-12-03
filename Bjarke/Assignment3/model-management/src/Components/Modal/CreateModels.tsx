import { ChangeEvent, useState } from "react";
import InputField from "../InputField";
import Heading from "../../Layout/Heading";
import { useRegister } from "../../mutation/Model/postRegister";
import type { ModelRegisterDto } from "../../../interfaces/Model";
import Button from "../Button";

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

  const [sumbitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const { mutate: register } = useRegister();

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
    register(model);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center w-2/3">
        <h2>Create Model </h2>
        <form className="flex flex-col justify-center">
          <label className="mx-4 text-sm">First Name</label>
          <InputField
            type="text"
            required
            placeholder="John"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Last Name</label>
          <InputField
            type="text"
            required
            placeholder="Doe"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Phone number</label>
          <InputField
            type="text"
            required
            placeholder="123456789"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Email</label>
          <InputField
            type="text"
            required
            placeholder="email@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label className="mx-4 text-sm">Password</label>
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
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default CreateModel;
