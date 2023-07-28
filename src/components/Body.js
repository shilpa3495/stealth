import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JobProvider } from "../utils/jobContext";
import { getJob } from "../utils/jobSlice";
import CreateJob from "./CreateJob/CreateJob";
import CustomModal from "./CustomModal";
import JobCard from "./JobCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(getJob());
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error !== null) return <h2>{error}</h2>;
  return (
    <>
      <div className="flex p-[30px]">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={openModal}
        >
          Create Job
        </button>
      </div>
      <div className="gap-x-20 gap-y-20 justify-between flex-wrap  p-[30px] h-full grid grid-cols-2">
        {jobs?.map((job) => {
          return (
            <JobCard
              headingText="text-2xl font-normal"
              descriptionText="text-base font-normal"
              buttonText="text-base font-medium w-fit"
              jobData={job}
              key={job.id}
            />
          );
        })}
      </div>

       <CustomModal isOpen={isModalOpen} closeModal={closeModal}>
        <JobProvider>
          <CreateJob closeModal={closeModal} />
        </JobProvider>
      </CustomModal>
    </>
  );
};

export default Body;
