import Heading from "../Layout/Heading";
import getJobList from "../queries/Jobs";
import JobList from "../Components/Job/JobList";

const JobPage = () => {
  const { data: jobsData } = getJobList();

  return <JobList jobListData={jobsData} />;
};

export default JobPage;
