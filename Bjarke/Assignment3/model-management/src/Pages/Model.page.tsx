import { useState } from "react";
import TextButton from "../Components/Button";
import Modal from "../Components/BiggerModal";
import CreateModel from "../Components/Modal/CreateModel";
import Heading from "../Layout/Heading";

const ModelPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Heading text={"Model"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4">
        <TextButton onClick={() => setShowModal(true)} text={"Create Model"} />
        <div className="text-3 font-bold underline ">
          <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
            <CreateModel />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ModelPage;
