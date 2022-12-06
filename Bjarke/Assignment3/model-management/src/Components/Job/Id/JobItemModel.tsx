import type { Job } from "../../../../interfaces/Job";
import Moment from "moment";
import JobModel from "./JobModel";
import Heading from "../../../Layout/Heading";
import { useState } from "react";
import Modal from "../../ModalComponents/Modal";
import ModalJobModel from "./ModalJobModel";
import Button from "../../Button";
import ModalAddExpense from "./ModalAddExpense";
import useAuth from "../../../Middelware/useAuth";

const JobItem = ({ job }: { job: Job }) => {
  Moment.locale("dk");
  const { auth } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showModalExpense, setShowModalExpense] = useState(false);

  return (
    <>
      <Heading text={"Jobs"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg content-center h-200 m-4  flex flex-col justify-center">
          {auth[2] == "Manager" ? (
            <Button
              onClick={() => setShowModal(true)}
              text={"Change Model To Job"}
            />
          ) : (
            <Button
              onClick={() => setShowModalExpense(true)}
              text={"Add Expense Job"}
            />
          )}

          <h1>Job: {job.customer}</h1>
          <h2>Location: {job.location}</h2>
          <h3>{Moment(job.startDate).format("LLLL")}</h3>
          <h3>Days: {job.days}</h3>
          <p>{job.comments}</p>

          {job?.models?.map((model: any, index) => (
            <div
              key={index}
              className="rounded bg-white shadow-lg  m-4 flex flex-col justify-center"
            >
              <JobModel model={model} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-3 font-bold underline ">
        <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
          <ModalJobModel jobId={job.jobId} />
        </Modal>
      </div>

      <div className="text-3 font-bold underline ">
        <Modal
          IsVisible={showModalExpense}
          onClose={() => setShowModalExpense(false)}
        >
          <ModalAddExpense jobId={job.jobId} />
        </Modal>
      </div>
    </>
  );
};

export default JobItem;
