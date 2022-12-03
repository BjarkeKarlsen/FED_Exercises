// import type { JobRegisterDto } from "../../interfaces/Job";
import { useQuery } from "react-query";
import { request } from "../utils/Axios-utils";

const fetchAllJobs = async () => {
  const response = await request({ url: "job", method: "get" });
  console.log(response.status);
  if (response.status == 304) {
    throw new Error("Problem fetching data");
  }
  const job = await response.data;

  return response;
};

const GetJobList = () => {
  return useQuery("jobKey", fetchAllJobs, {
    refetchOnWindowFocus: false,
  });
};

export default GetJobList;
