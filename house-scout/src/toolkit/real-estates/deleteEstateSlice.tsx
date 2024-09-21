import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuthAxios } from "../../utils/hooks/useAxios";

import { DeleteEstateStateProps } from "../types";

// Interface for request data
interface ValuesProps {
  id: number;
}

// Interface for Rejected State
interface RejectWithValueProps {
  message: string;
}

// Interface for returned data
interface ActionProps {
  message: string;
}

export const deleteEstate = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("deleteEstate", async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await useAuthAxios.delete(`/real-estates/${id}`);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  success: null,
  isLoading: false,
  error: null,
} satisfies DeleteEstateStateProps as DeleteEstateStateProps;

export const deleteEstateSlice = createSlice({
  name: "deleteEstate",
  initialState,
  reducers: {
    reset: (state) => {
      state.success = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(deleteEstate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteEstate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    });
    builder.addCase(deleteEstate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = deleteEstateSlice.actions;
export default deleteEstateSlice.reducer;
