import { useState } from "react";
import TextButton from "../Button";
import Modal from "../ModalComponents/BiggerModal";
import CreateModel from "./ModalCreateModel";
import Heading from "../../Layout/Heading";
import ModelList from "./ModelList";

const ModelContent = ({ model }: { model: any }) => {
  console.log("ModelContent", model);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Heading text={"Model"} />
      <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4">
        <TextButton onClick={() => setShowModal(true)} text={"Create Model"} />
        <div className="text-3 font-bold underline "></div>
        <Modal IsVisible={showModal} onClose={() => setShowModal(false)}>
          <CreateModel />
        </Modal>
      </div>
      <ModelList model={model?.data} />
    </>
  );
};

export default ModelContent;
