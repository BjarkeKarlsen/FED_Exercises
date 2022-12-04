//import getJobList from "../../queries/Jobs";

import { Link } from "react-router-dom";
import { Job } from "../../../interfaces/Job";
import JobList from "./JobList";
import Moment from "moment";

const JobItem = ({ job }: { job: Job }) => {
  Moment.locale("dk");
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg content-center h-200 flex flex-col justify-center">
      <Link
        className="w-full block p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-green-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        to="/job/:id"
      >
        <h1>Job: {job.customer}</h1>
        <h2>Location: {job.location}</h2>
        <h3>{Moment(job.startDate).format("LLLL")}</h3>
        <h3>Days: {job.days}</h3>
        <p>{job.comments}</p>
      </Link>
    </div>
  );
};

export default JobItem;
{
  /* <div>
<label>Customer</label>
<p>{job.customer}</p>
<p>{job.startdate}</p>
<p>{job.days}</p>
<p>{job.location}</p>
<label>Start Date</label>
<label>Date</label>
<label>Location</label>
<label>Comments</label>
</div> */
}
