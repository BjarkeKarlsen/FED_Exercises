import GetJobList from "../queries/Jobs";
import { useParams } from "react-router-dom";
import { GetJob } from "../queries/Job";
import JobItemModel from "../Components/Job/Id/JobItemModel";
import LoadingSpinner from "../Components/LoadingSpinner";

const JobsPage = () => {
  const { jobId } = useParams();
  const { data: jobsData, isLoading, isError, error } = GetJob(Number(jobId));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <JobItemModel job={jobsData?.data} />
    </>
  );
};

export default JobsPage;
