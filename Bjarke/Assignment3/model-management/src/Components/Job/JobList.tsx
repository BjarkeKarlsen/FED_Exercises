import { useState } from "react";
import Heading from "../../Layout/Heading";
import TextButton from "../Button";
import Modal from "../ModalComponents/BiggerModal";
import JobItem from "./JobItem";
import ModalCreateJob from "./ModalCreateJob";

const JobList = ({ jobListData }: { jobListData: any }) => {
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
        <JobItem job={jobListData} />
      </div>
    </div>
  );
};

export default JobList;
