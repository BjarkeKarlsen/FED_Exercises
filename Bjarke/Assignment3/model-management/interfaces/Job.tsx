export type JobRegisterDto = {
  jobid: number;
  customer: string;
  startdate: string;
  days: number;
  location: string;
  comments: string;
};

export type JobModel = {
  jobid: number;
  modelid: number;
};
