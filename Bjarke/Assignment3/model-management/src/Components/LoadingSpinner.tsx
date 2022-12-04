import { Spinner } from "flowbite-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center item-center content-center">
      <Spinner size="xl" color="success"></Spinner>
    </div>
  );
};

export default LoadingSpinner;
