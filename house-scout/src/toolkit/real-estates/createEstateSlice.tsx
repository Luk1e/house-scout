import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuthFileAxios } from "../../utils/hooks/useAxios";

import { EstateType, CreateEstateStateProps } from "../types";

// Interface for request data
type ValuesProps = {
  is_rental: number;
  address: string;
  zip_code: number;
  region_id: number;
  city_id: number;
  price: number;
  area: number;
  bedrooms: number;
  description: string;
  image: File | undefined;
  agent_id: number;
};

// Interface for Rejected State
interface RejectWithValueProps {
  message: string;
}

// Interface for returned data
type ActionProps = EstateType;

export const createEstate = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("createEstate", async (values, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("address", values.address);
    formData.append("region_id", values.region_id.toString());
    formData.append("description", values.description);
    formData.append("city_id", values.city_id.toString());
    formData.append("zip_code", values.zip_code.toString());
    formData.append("price", values.price.toString());
    formData.append("area", values.area.toString());
    formData.append("bedrooms", values.bedrooms.toString());
    formData.append("is_rental", values.is_rental.toString());
    formData.append("agent_id", values.agent_id.toString());

    if (values.image) {
      formData.append("image", values.image);
    }

    const { data } = await useAuthFileAxios.post(`/real-estates`, formData);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  estate: null,
  isLoading: false,
  error: null,
} satisfies CreateEstateStateProps as CreateEstateStateProps;

export const createEstateSlice = createSlice({
  name: "createEstate",
  initialState,
  reducers: {
    reset: (state) => {
      state.estate = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createEstate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createEstate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.estate = action.payload;
    });
    builder.addCase(createEstate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = createEstateSlice.actions;
export default createEstateSlice.reducer;
