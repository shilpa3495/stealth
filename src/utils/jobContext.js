import { createContext, useContext, useState } from "react"


const JobContext=createContext();

export const JobProvider = ({ children }) => {
    const [formData, setFormData] = useState({});
    return (
      <JobContext.Provider value={{ formData, setFormData }}>
        {children}
      </JobContext.Provider>
    );
  };


  export const useJob=()=>{
    return useContext(JobContext)
  }