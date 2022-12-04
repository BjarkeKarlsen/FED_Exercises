import { Link } from "react-router-dom";
import { Job } from "../../../../interfaces/Job";
import JobList from "../JobList";
import Moment from "moment";
import JobModel from "./JobModel";
import Heading from "../../../Layout/Heading";

const JobItem = ({ job }: { job: Job }) => {
  Moment.locale("dk");
  return (
    <>
      <Heading text={"Jobs"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg content-center h-200 flex flex-col justify-center">
          <h1>Job: {job.customer}</h1>
          <h2>Location: {job.location}</h2>
          <h3>{Moment(job.startDate).format("LLLL")}</h3>
          <h3>Days: {job.days}</h3>
          <p>{job.comments}</p>

          {job?.models?.map((model: any, index) => (
            <div
              key={index}
              className="rounded bg-white shadow-lg md:w-1/3 m-4 flex flex-col justify-center"
            >
              <JobModel model={model} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobItem;
