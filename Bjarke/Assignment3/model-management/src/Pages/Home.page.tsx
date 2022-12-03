import { useState } from "react";
import Modal from "../Components/ModalComponents/Modal";
import CreateModel from "../Components/Model/ModalCreateModel";
import TextButton from "../Components/Button";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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

export default HomePage;
