import { useState } from "react";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import { useSelector } from "react-redux";

const CreateJob = ({ closeModal }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };
  const selectedJob = useSelector((state) => state.jobs.selectedJob);

  const isEditing = Boolean(selectedJob);

  return (
    <div className="bg-white p-8 flex flex-col gap-y-6 border border-createCardBorder rounded-borderRadius2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-grey2">{isEditing ?"Edit a job":"Create a job"}</h2>
        <span className="text-base text-grey2">Step {step}</span>
      </div>
      {step === 1 && <StepOneForm onNext={handleNext} />}
      {step === 2 && <StepTwoForm  closeModal={closeModal}/>}
    </div>
  );
};

export default CreateJob;
