import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "../../utils/hooks/useAxios";

import { RegionType, RegionStateProps } from "../types";

// Interface for request data
type ValuesProps = void;

// Interface for Rejected State (optional, for more granular error handling)
interface RejectWithValueProps {
  message: string;
}

type ActionProps = RegionType[];

export const getRegions = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("getRegions", async (_, { rejectWithValue }) => {
  try {
    const { data } = await useAxios.get(`/regions`);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  regions: null,
  isLoading: false,
  error: null,
} satisfies RegionStateProps as RegionStateProps;

export const regionSlice = createSlice({
  name: "getRegions",
  initialState,
  reducers: {
    reset: (state) => {
      state.regions = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRegions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRegions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.regions = action.payload;
    });
    builder.addCase(getRegions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = regionSlice.actions;
export default regionSlice.reducer;
