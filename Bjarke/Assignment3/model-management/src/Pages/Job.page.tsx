import GetJobList from "../queries/Jobs";
import JobList from "../Components/Job/JobList";

const JobPage = () => {
  const { data: jobsData } = GetJobList();

  console.log("This is jobdata", jobsData?.data);
  return (
    <>
      <JobList jobList={jobsData?.data} />
    </>
  );
};

export default JobPage;
