import { useState } from "react";
import { useDispatch } from "react-redux";
import CompanyImage from "../../src//assets/company-image.svg";
import EditImage from "../../src//assets/edit.svg";
import DeleteImage from "../../src//assets/delete.svg";
import { JobProvider } from "../utils/jobContext";
import { setSelectedJob } from "../utils/jobSlice";
import CreateJob from "./CreateJob/CreateJob";
import CustomModal from "./CustomModal";
import DeleteModal from "./DeleteModal";

const JobCard = (props) => {
  const { headingText, descriptionText, buttonText, jobData } = props;

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const dispatch = useDispatch();

  const categorizeEmployees = (totalEmployee) => {
    if (totalEmployee <= 200) {
      return "51-200";
    } else {
      // Handle other cases if needed
      return "More than 200";
    }
  };

  const handleDeleteModal = () => {
    setIsDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
  };

  const handleEditModal = (job) => {
    setIsEditModal(true);
    dispatch(setSelectedJob(job));
  };

  const closeEditModal = () => {
    setIsEditModal(false);
    dispatch(setSelectedJob(null));
  };

  return (
    <>
      <div className="flex items-start gap-x-2 h-fit border border-jobCardBorderColor rounded-borderRadius2 py-4 px-6 bg-white">
        <img src={CompanyImage} />
        <div className="flex gap-y-6 flex-col flex-1">
          <div>
            <div className="flex">
              <div className={`${headingText} text-black break-words flex-1`}>
                {jobData?.title}
              </div>
              <div className="flex gap-x-3">
                <img
                  className="w-5 cursor-pointer"
                  src={EditImage}
                  onClick={() => handleEditModal(jobData)}
                />
                <img
                  className="w-5 cursor-pointer"
                  src={DeleteImage}
                  onClick={handleDeleteModal}
                />
              </div>
            </div>
            <p className={`${descriptionText} text-black break-words `}>
              {jobData?.companyName} - {jobData?.industry}
            </p>
            <p
              className={`${descriptionText} text-placeholderColor break-words `}
            >
              {jobData?.location}({jobData?.remoteType})
            </p>
          </div>
          <div className="flex gap-y-2 flex-col">
            <p className={`${descriptionText} text-black1`}>
              Part-Time (9.00 am - 5.00 pm IST)
            </p>
            <p className={`${descriptionText} text-black1`}>
              Experience ({jobData?.minimumExperience} -{" "}
              {jobData?.maximumExperience} years)
            </p>
            <p className={`${descriptionText} text-black1`}>
              INR (₹) {jobData?.minimumSalary} - {jobData?.maximumSalary} /
              Month
            </p>
            <p className={`${descriptionText} text-black1`}>
              {categorizeEmployees(jobData?.totalEmployee)} employees
            </p>
          </div>
          {jobData?.applyType === "quick apply" && (
            <button
              className={`rounded-md bg-primaryColor flex  justify-center py-2 px-4 text-white  shadow-sm ${buttonText}`}
            >
              Apply Now
            </button>
          )}
          {jobData?.applyType === "external apply" && (
            <button
              className={`rounded-borderRadius1  border border-primaryColor flex  justify-center py-2 px-4 text-primaryColor leading-6 ${buttonText}`}
            >
              External Apply{" "}
            </button>
          )}
        </div>
      </div>

      <CustomModal isOpen={isDeleteModal} closeModal={closeDeleteModal}>
        <DeleteModal closeModal={closeDeleteModal} jobId={jobData.id} />
      </CustomModal>

      <CustomModal isOpen={isEditModal} closeModal={closeEditModal}>
        <JobProvider>
          <CreateJob closeModal={closeEditModal} />
        </JobProvider>
      </CustomModal>
    </>
  );
};

export default JobCard;
