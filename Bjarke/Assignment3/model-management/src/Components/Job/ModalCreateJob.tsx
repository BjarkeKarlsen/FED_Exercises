import { useState } from "react";
import InputField from "../InputField";
import { ChangeEvent } from "react";
import type { JobRegisterDto } from "../../../interfaces/Job";
import { useRegister } from "../../mutation/Job/PostJob";
import ModalHeader from "../ModalComponents/Header";
import { Label } from "../ModalComponents/Label";
import Button from "../Button";
import NumberField from "../NumberField";

export default function CreateJob() {
  const [customer, setCustomer] = useState("");
  const [startdate, setstartDate] = useState("");
  const [days, setDays] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const job: JobRegisterDto = {
      customer: customer,
      startdate: startdate,
      days: days,
      location: location,
      comments: comments,
    };
    register(job);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <ModalHeader text={"Create Job"} />

        <form className="flex flex-col justify-center">
          <div className=" inline-flex justify-between ">
            <Label text={"Customer"} />
            <InputField
              type="text"
              required
              placeholder="Customer"
              value={customer}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCustomer(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Start Date"} />
            <InputField
              type="date"
              required
              placeholder="Start Date"
              value={startdate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setstartDate(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Days"} />
            <NumberField
              required
              placeholder="0"
              value={days}
              min={0}
              max={230}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDays(e.target.valueAsNumber)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Location"} />
            <InputField
              type="text"
              required
              placeholder="Location"
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label text={"Comments"} />
            <InputField
              type="text"
              required
              placeholder="Comments"
              value={comments}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setComments(e.target.value)
              }
            />
          </div>
          <Button text="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
