import { useState } from "react";
import Heading from "../../Layout/Heading";
import Modal from "../ModalComponents/BiggerModal";
import TextButton from "../Button";
import ManagerList from "./ManagerList";
import CreateManager from "./ModalCreateManager";

const ManagerContent = ({ managerData }: { managerData: any }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Heading text={"Manager"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4">
        <TextButton onClick={() => setShowModal(true)} text={"Create Model"} />
        <div className="text-3 font-bold underline ">
          <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
            <CreateManager />
          </Modal>
        </div>
        <ManagerList managerData={managerData?.data} />
      </div>
    </>
  );
};

export default ManagerContent;
