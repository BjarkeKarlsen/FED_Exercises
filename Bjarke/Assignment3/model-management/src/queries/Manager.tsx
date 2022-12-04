// import type { JobRegisterDto } from "../../interfaces/Job";
import { useQuery } from "react-query";
import { request } from "../utils/Axios-utils";

const fetchAllManager = async () => {
  const response = await request({ url: "manager", method: "get" });
  console.log(response.status);
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }

  return response;
};

const GetManagerList = () => {
  return useQuery("managerKey", fetchAllManager, {
    refetchOnWindowFocus: false,
  });
};

export default GetManagerList;
