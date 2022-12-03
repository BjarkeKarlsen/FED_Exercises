import { useState } from "react";
import InputField from "../InputField";
import Heading from "../../Layout/Heading";
import { ChangeEvent } from "react";
import type { JobRegisterDto } from "../../../interfaces/Job";
import { useRegister } from "../../mutation/Job/postRegister";

export default function CreateJob() {
  const [jobId, setJobId] = useState<number>(0);
  const [customer, setCustomer] = useState("");
  const [startdate, setstartDate] = useState("");
  const [days, setDays] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const job: JobRegisterDto = {
      jobid: jobId as number,
      customer: customer,
      startdate: startdate,
      days: days,
      location: location,
      comments: comments,
    };
    register(job);
  };

  return (
    <div>
      <div>
        <Heading text="Create Job" />
      </div>
      <form>
        <label>Job ID</label>
        <InputField
          type="number"
          required
          placeholder="Job ID"
          value={jobId}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobId(e.target.valueAsNumber)
          }
        />
        <label>Customer</label>
        <InputField
          type="text"
          required
          placeholder="Customer"
          value={customer}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCustomer(e.target.value)
          }
        />
        <label>Start Date</label>
        <InputField
          type="string"
          required
          placeholder="Start Date"
          value={startdate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setstartDate(e.target.value)
          }
        />
        <label>Days</label>
        <InputField
          type="number"
          required
          placeholder="Days"
          value={days}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobId(e.target.valueAsNumber)
          }
        />
        <label>Location</label>
        <InputField
          type="text"
          required
          placeholder="Location"
          value={location}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
        />
        <label>Comments</label>
        <InputField
          type="text"
          required
          placeholder="Comments"
          value={comments}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setComments(e.target.value)
          }
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
