import { useState } from "react";
import Heading from "../../Layout/Heading";
import TextButton from "../Button";
import Modal from "../ModalComponents/BiggerModal";
import JobItem from "./JobItem";
import ModalCreateJob from "./ModalCreateJob";
import type { Job } from "../../../interfaces/Job";

const JobList = ({ jobList }: { jobList: Job[] }) => {
  console.log("This is the joblist.job", jobList);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Heading text={"Jobs"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4">
        <TextButton onClick={() => setShowModal(true)} text={"Create Model"} />
        <div className="text-3 font-bold underline ">
          <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
            <ModalCreateJob />
          </Modal>
        </div>
        {/* <JobItem job={jobList[0]} /> */}

        <div className="flex flex-wrap justify-center">
          {/* This maps out all workouts with their exercise as names */}
          {jobList?.map((job: any) => (
            <div
              key={job.jobId}
              className="rounded bg-white shadow-lg md:w-1/3 m-4 flex flex-col justify-center"
            >
              <JobItem job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;

{
  /* <Button
                text={"Add To Calendar"}
                onClick={() => {
                  setShowAddToCalendarModal(true);
                  setIdPassToModal(meal.id);
                }}
                key={undefined}
              />

              <DeleteButton
                text={"Delete"}
                onClick={() => {
                  handleDeleteButtonClick(meal.id);
                }}
              /> */
}
