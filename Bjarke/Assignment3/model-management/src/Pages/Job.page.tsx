import Heading from "../Layout/Heading";
import GetJobList from "../queries/Jobs";
import JobList from "../Components/Job/JobList";

const JobPage = () => {
  const { data: jobsData } = GetJobList();

  return <JobList jobListData={jobsData} />;
};

export default JobPage;
