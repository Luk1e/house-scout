import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuthFileAxios } from "../../utils/hooks/useAxios";

import { AgentType, CreateAgentStateProps } from "../types";

// Interface for request data
type ValuesProps = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: File | undefined;
};

// Interface for Rejected State
interface RejectWithValueProps {
  message: string;
}

// Interface for returned data
type ActionProps = AgentType;

export const createAgent = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("createAgent", async (values, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("surname", values.surname);
    formData.append("email", values.email);
    formData.append("phone", values.phone);

    if (values.avatar) {
      formData.append("avatar", values.avatar);
    }

    const { data } = await useAuthFileAxios.post(`/agents`, formData);
    console.log(data);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  agent: null,
  isLoading: false,
  error: null,
} satisfies CreateAgentStateProps as CreateAgentStateProps;

export const createAgentSlice = createSlice({
  name: "createAgent",
  initialState,
  reducers: {
    reset: (state) => {
      state.agent = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createAgent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createAgent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.agent = action.payload;
    });
    builder.addCase(createAgent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = createAgentSlice.actions;
export default createAgentSlice.reducer;
