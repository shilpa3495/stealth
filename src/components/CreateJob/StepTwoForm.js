import { useFormik } from "formik";
import { useJob } from "../../utils/jobContext";
import { useDispatch, useSelector } from "react-redux";
import { createJob, setSelectedJob, updateJob } from "../../utils/jobSlice";

const StepTwoForm = ({ closeModal }) => {
  const { formData, setFormData } = useJob();
  const dispatch = useDispatch();
  const selectedJob = useSelector((state) => state.jobs.selectedJob);

  const isEditing = Boolean(selectedJob);

  const initialValues = {
    minimumExperience: isEditing ? selectedJob.minimumExperience : "",
    maximumExperience: isEditing ? selectedJob.maximumExperience : "",
    minimumSalary: isEditing ? selectedJob.minimumSalary : "",
    maximumSalary: isEditing ? selectedJob.maximumSalary : "",
    totalEmployee: isEditing ? selectedJob.totalEmployee : "",
    applyType: isEditing ? selectedJob.applyType : "",
  };

  const handleSubmit = async (data, actions) => {
    try {
      // Handle the API
      if (isEditing) {
        dispatch(updateJob({ jobId: selectedJob.id, data: data }));
        // Clear the selectedJob state after the update is successful
        dispatch(setSelectedJob(null));
        actions.resetForm();
        setFormData({});
        closeModal();
        
      } else {
        dispatch(createJob(data));
        actions.resetForm();
        setFormData({});
        closeModal();
      }

    } catch (error) {
      // Handle errors
      console.error("error", error);
    }
  };


  const stepTwoFormik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      const data = { ...formData, ...values };
      handleSubmit(data, actions);
    },
  });

  return (
    <>
      <form onSubmit={stepTwoFormik.handleSubmit}>
        <div className="flex flex-col gap-y-6">
          <fieldset className="flex flex-col gap-y-1">
            <legend className="text-left text-sm text-darkFontColor font-medium">
              Experience
            </legend>
            <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <input
                type="number"
                name="minimumExperience"
                id="minimumExperience"
                autoComplete="off"
                onChange={stepTwoFormik.handleChange}
                className=" sm:col-span-3 block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
                placeholder="Minimum"
                value={stepTwoFormik.values.minimumExperience}
              />

              <input
                type="number"
                name="maximumExperience"
                id="maaximumExperience"
                autoComplete="off"
                onChange={stepTwoFormik.handleChange}
                className="sm:col-span-3 block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
                placeholder="Maximum"
                value={stepTwoFormik.values.maximumExperience}
              />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-y-1">
            <legend className="text-left text-sm text-darkFontColor font-medium">
              Salary
            </legend>
            <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-6">
              <input
                type="number"
                name="minimumSalary"
                id="minimumSalary"
                autoComplete="off"
                onChange={stepTwoFormik.handleChange}
                className="sm:col-span-3 block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
                placeholder="Minimum"
                value={stepTwoFormik.values.minimumSalary}
              />
              <input
                type="number"
                name="maximumSalary"
                id="maximumSalary"
                autoComplete="off"
                onChange={stepTwoFormik.handleChange}
                className="sm:col-span-3 block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
                placeholder="Maximum"
                value={stepTwoFormik.values.maximumSalary}
              />
            </div>
          </fieldset>

          <div className="flex flex-col gap-y-1">
            <label
              htmlFor="totalEmployee"
              className="text-left text-sm text-darkFontColor font-medium"
            >
              Total employee
            </label>
            <input
              type="number"
              name="totalEmployee"
              id="totalEmployee"
              autoComplete="off"
              onChange={stepTwoFormik.handleChange}
              className="block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
              placeholder="ex. 100"
              value={stepTwoFormik.values.totalEmployee}
            />
          </div>

          <fieldset className="flex flex-col gap-y-1 ">
            <legend className="text-left text-sm text-darkFontColor font-medium">
              Apply type
            </legend>

            <div className="flex gap-x-4">
              <div className="flex gap-x-1 items-center">
                <input
                  type="radio"
                  name="applyType"
                  id="quickApply"
                  onChange={stepTwoFormik.handleChange}
                  value={"quick apply"}
                  checked={stepTwoFormik.values.applyType==="quick apply"}
                  className="border-grey1 w-5 focus:ring-indigo-600"
                />
                <label
                  htmlFor="quickApply"
                  className="text-left text-sm text-placeholderColor font-normal"
                >
                  Quick apply
                </label>
              </div>
              <div className="flex gap-x-1 items-center">
                <input
                  type="radio"
                  name="applyType"
                  id="externalApply"
                  onChange={stepTwoFormik.handleChange}
                  checked={stepTwoFormik.values.applyType==="external apply"}
                  value="external apply"
                  className="border-grey1 w-5 focus:ring-indigo-600"
                />
                <label
                  htmlFor="externalApply"
                  className="text-left text-sm text-placeholderColor font-normal"
                >
                  External apply
                </label>
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            className="rounded-md bg-primaryColor flex  justify-center py-2 px-4 text-white shadow-sm text-base font-medium w-fit self-end"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default StepTwoForm;
