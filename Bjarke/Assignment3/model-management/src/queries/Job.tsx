import type { JobRegisterDto } from "../../interfaces/Job";
import { useQuery, useQueryClient } from "react-query";
import { request } from "../utils/Axios-utils";

const fetchJob = async ({ queryKey }: { queryKey: Array<any> }) => {
  const id = queryKey[1];
  const response = await request({ url: `job/${id}`, method: "get" });
  console.log(response.status);
  if (response.status == 304) {
    throw new Error("Problem fetching data");
  }
  const job = await response.data;

  return response;
};

export const GetJob = (id: number) => {
  const queryClient = useQueryClient();
  return useQuery([`jobKey`, id], fetchJob, {
    initialData: () => {
      const job = queryClient
        .getQueriesData("jobsKey")
        ?.find((job: any) => job.id === id);

      if (job) {
        return { data: job };
      } else {
        return undefined;
      }
    },
    refetchInterval: 5000,
  });
};
