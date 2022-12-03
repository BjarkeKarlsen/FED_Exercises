// import type { JobRegisterDto } from "../../interfaces/Job";
import { useQuery } from "react-query";
import { request } from "../utils/Axios-utils";

const fetchAllModels = async () => {
  const response = await request({ url: "model", method: "get" });
  console.log(response.status);
  if (response.status == 304) {
    throw new Error("Problem fetching data");
  }
  const job = await response.data;

  return response;
};

const GetModelList = () => {
  return useQuery("modelKey", fetchAllModels, {
    refetchOnWindowFocus: false,
  });
};

export default GetModelList;
