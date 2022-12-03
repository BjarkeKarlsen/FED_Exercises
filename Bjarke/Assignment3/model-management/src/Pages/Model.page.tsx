import { useState } from "react";
import TextButton from "../Components/Button";
import Modal from "../Components/Modal";
import CreateModel from "../Components/Modal/CreateModel";
import Heading from "../Layout/Heading";

const ModelPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Heading text={"Model"} />
      <TextButton
        onClick={() => setShowModal(true)}
        text={"Click here to sign up"}
      />
      <div className="text-3xl font-bold underline">
        <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
          <CreateModel />
        </Modal>
      </div>
    </>
  );
};

export default ModelPage;
