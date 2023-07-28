import * as Yup from "yup";
import { useFormik} from "formik";
import { useJob } from "../../utils/jobContext";
import { useSelector } from "react-redux";

const StepOneForm = ({ onNext }) => {


  const {setFormData}=useJob()

  const selectedJob = useSelector((state) => state.jobs.selectedJob);

  const isEditing = Boolean(selectedJob);


  const initialValues = {
    title: isEditing ? selectedJob.title:"",
    companyName:isEditing ? selectedJob.companyName: "",
    industry: isEditing ? selectedJob.industry: "",
    location: isEditing ? selectedJob.location: "",
    remoteType: isEditing ? selectedJob.remoteType: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    companyName: Yup.string().required("Company name is required"),
    industry: Yup.string().required("Industry is required"),
    // Add more validation rules for other fields
  });


  const stepOneFormik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onNext();
      setFormData(values)
    },
  });

  return (
    <form onSubmit={stepOneFormik.handleSubmit}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="title"
            className="text-left text-sm text-darkFontColor font-medium"
          >
            Job title*
          </label>
          <input
            type="text"
            name="title"
            value={stepOneFormik.values.title}
            onChange={stepOneFormik.handleChange}
            id="title"
            autoComplete="off"
            className="block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
            placeholder="ex. UX UI Designer"
          />

          {stepOneFormik.touched.title && stepOneFormik.errors.title && (
            <div className="text-sm text-ErrorColor">
              {stepOneFormik.errors.title}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="companyName"
            className="text-left text-sm text-darkFontColor font-medium"
          >
            Company name*
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            onChange={stepOneFormik.handleChange}
            autoComplete="off"
            className="block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
            placeholder="ex. Google"
            value={stepOneFormik.values.companyName}
          />
          {stepOneFormik.touched.companyName &&
            stepOneFormik.errors.companyName && (
              <div className="text-sm text-ErrorColor">
                {stepOneFormik.errors.companyName}
              </div>
            )}
        </div>

        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="industry"
            className="text-left text-sm text-darkFontColor font-medium"
          >
            Industry*
          </label>
          <input
            type="text"
            name="industry"
            id="industry"
            autoComplete="off"
            onChange={stepOneFormik.handleChange}
            className="block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
            placeholder="ex. Information Technology "
            value={stepOneFormik.values.industry}
          />
          {stepOneFormik.touched.industry && stepOneFormik.errors.industry && (
            <div className="text-sm text-ErrorColor">
              {stepOneFormik.errors.industry}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
          <div className="flex flex-col gap-y-1 sm:col-span-3">
            <label
              htmlFor="location"
              className="text-left text-sm text-darkFontColor font-medium"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              autoComplete="off"
              onChange={stepOneFormik.handleChange}
              className="block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
              placeholder="ex. Chennai"
              value={stepOneFormik.values.location}
            />
          </div>

          <div className="flex flex-col gap-y-1 sm:col-span-3">
            <label
              htmlFor="remoteType"
              className="text-left text-sm text-darkFontColor font-medium"
            >
              Remote type
            </label>
            <input
              type="text"
              name="remoteType"
              id="remoteType"
              autoComplete="off"
              onChange={stepOneFormik.handleChange}
              className="block border w-full border-createCardBorder rounded-borderRadius1 py-2 px-3 text-left text-sm text-black placeholder:text-placeholderColor focus:ring-0"
              placeholder="ex. In-office"
              value={stepOneFormik.values.remoteType}
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-md bg-primaryColor flex  justify-center py-2 px-4 text-white shadow-sm text-base font-medium w-fit self-end"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepOneForm;
