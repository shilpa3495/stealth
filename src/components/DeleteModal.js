import { useDispatch } from "react-redux";
import { deleteJob } from "../utils/jobSlice";

const DeleteModal = ({ closeModal, jobId }) => {
  const dispatch = useDispatch();
  
  const handleDeleteJob = () => {
    dispatch(deleteJob(jobId));
    closeModal()   
  };
  return (
    <div className="flex flex-col bg-white border rounded-md font-medium gap-y-7 border-createCardBorder text-md text-black p-6">
      Are you sure you want to delete this Job?
      <div className="flex gap-x-5 justify-end font-normal">
        <button
          className="rounded-md bg-gray-300 flex  justify-center py-2 px-4 text-black  shadow-sm hover:bg-gray-400"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          className="rounded-md bg-red-600 flex  justify-center py-2 px-4 text-white  shadow-sm hover:bg-red-700"
          onClick={handleDeleteJob}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
