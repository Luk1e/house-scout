import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuthAxios } from "../../utils/hooks/useAxios";

import { GetEstateType, EstateStateProps } from "../types";

// Interface for request data
interface ValuesProps {
  id: number;
}

// Interface for Rejected State
interface RejectWithValueProps {
  message: string;
}

// Interface for returned data
type ActionProps = GetEstateType;

export const getEstate = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("getEstate", async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await useAuthAxios.get(`/real-estates/${id}`);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  estate: null,
  isLoading: false,
  error: null,
} satisfies EstateStateProps as EstateStateProps;

export const estateSlice = createSlice({
  name: "getEstate",
  initialState,
  reducers: {
    reset: (state) => {
      state.estate = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getEstate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEstate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.estate = action.payload;
    });
    builder.addCase(getEstate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = estateSlice.actions;
export default estateSlice.reducer;
