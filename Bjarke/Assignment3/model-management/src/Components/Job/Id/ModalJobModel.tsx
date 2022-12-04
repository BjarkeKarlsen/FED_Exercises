import { ChangeEvent, useState } from "react";
import { useJobAddModel } from "../../../mutation/Job/PostJobAddModel";
import { useJobDeleteModel } from "../../../mutation/Job/DeleteJobRmovedModel";
import NumberField from "../../NumberField";
import Button from "../../Button";
import DeleteButton from "../../DeleteButton";
import { JobModelDto } from "../../../../interfaces/Job";

const ModalJobModel = ({ jobId }: { jobId: number }) => {
  const { mutate: jobAddModel } = useJobAddModel();
  const { mutate: jobDeleteModel } = useJobDeleteModel();
  const [modelId, setModelId] = useState<number>(0);

  const handleAddModelOnclick = () => {
    const workoutDto: JobModelDto = {
      jobId: jobId,
      modelId: modelId,
    };
    jobAddModel(workoutDto);
  };
  const handleDeleteModelOnclick = () => {
    const workoutDto: JobModelDto = {
      jobId: jobId,
      modelId: modelId,
    };
    jobDeleteModel(workoutDto);
  };

  return (
    <form className="flex flex-col justify-center">
      <label className="mx-4 text-sm">Change Model To Job</label>
      <NumberField
        required
        placeholder="Model Id"
        value={modelId}
        min={"0"}
        max={"50"}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setModelId(e.target.valueAsNumber)
        }
      />
      <div className="inline-flex justify-between ">
        <Button text="Add" onClick={handleAddModelOnclick} />
        <DeleteButton text="Remove" onClick={handleDeleteModelOnclick} />
      </div>
    </form>
  );
};

export default ModalJobModel;
