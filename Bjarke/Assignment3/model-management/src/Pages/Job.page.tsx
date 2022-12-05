import GetJobList from "../queries/Jobs";
import JobList from "../Components/Job/JobList";
import LoadingSpinner from "../Components/LoadingSpinner";

const JobPage = () => {
  const { data: jobsData, isLoading, isError, error } = GetJobList();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <JobList jobList={jobsData?.data} />
    </>
  );
};

export default JobPage;
