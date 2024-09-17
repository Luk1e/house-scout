import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuthAxios } from "../../utils/hooks/useAxios";

import { EstateType, EstatesStateProps } from "../types";

// Interface for request data
type ValuesProps = void;

// Interface for Rejected State (optional, for more granular error handling)
interface RejectWithValueProps {
  message: string;
}

type ActionProps = EstateType[];

export const getEstates = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("getEstates", async (_, { rejectWithValue }) => {
  try {
    const { data } = await useAuthAxios.get(`/real-estates`);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  estates: null,
  isLoading: false,
  error: null,
} satisfies EstatesStateProps as EstatesStateProps;

export const estatesSlice = createSlice({
  name: "getEstates",
  initialState,
  reducers: {
    reset: (state) => {
      state.estates = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getEstates.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEstates.fulfilled, (state, action) => {
      state.isLoading = false;
      state.estates = action.payload;
    });
    builder.addCase(getEstates.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = estatesSlice.actions;
export default estatesSlice.reducer;
