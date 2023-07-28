import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../constant";

//create action
export const createJob = createAsyncThunk("createJob", async (data) => {
  try {
    const response = await axios.post(baseUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
});

//read action

export const getJob = createAsyncThunk("getJob", async () => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
});

//delete action

export const deleteJob = createAsyncThunk("deleteJob", async (jobId) => {
  try {
    const response = await axios.delete(`${baseUrl}/${jobId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
});

//update action


export const updateJob = createAsyncThunk("updateJob", async ({jobId,data}) => {
  try {
    const response = await axios.put(`${baseUrl}/${jobId}`, data,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
});



export const JobDetail = createSlice({
  name: "JobDetail",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    selectedJob:null,
  },

  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createJob.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs.push(action.payload);
    });
    builder.addCase(createJob.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      // Handle rejection here if needed
    });

    builder.addCase(getJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getJob.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
    builder.addCase(getJob.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      // Handle rejection here if needed
    });


    builder.addCase(deleteJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteJob.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = state.jobs.filter((job) => job.id !== action.payload.id);
    });
    builder.addCase(deleteJob.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      // Handle rejection here if needed
    });


    builder.addCase(updateJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateJob.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = state.jobs.map((job) =>
      job.id === action.payload.id ? action.payload : job);
    });
    builder.addCase(updateJob.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      // Handle rejection here if needed
    });


  },

});



export const { setSelectedJob } = JobDetail.actions;
export default JobDetail.reducer;
