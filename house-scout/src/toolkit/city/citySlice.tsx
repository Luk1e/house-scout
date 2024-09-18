import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAxios } from "../../utils/hooks/useAxios";

import { CityType, CityStateProps } from "../types";

// Interface for request data
type ValuesProps = void;

// Interface for Rejected State
interface RejectWithValueProps {
  message: string;
}

// Interface for returned data
type ActionProps = CityType[];

export const getCities = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("getCities", async (_, { rejectWithValue }) => {
  try {
    const { data } = await useAxios.get(`/cities`);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  cities: null,
  isLoading: false,
  error: null,
} satisfies CityStateProps as CityStateProps;

export const citySlice = createSlice({
  name: "getCities",
  initialState,
  reducers: {
    reset: (state) => {
      state.cities = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
    });
    builder.addCase(getCities.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = citySlice.actions;
export default citySlice.reducer;
