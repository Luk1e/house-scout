import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAuthAxios } from "../../utils/hooks/useAxios";

import { AgentType, AgentStateProps } from "../types";

// Interface for request data
type ValuesProps = void;

// Interface for Rejected State
interface RejectWithValueProps {
  message: string;
}

// Interface for returned data
type ActionProps = AgentType[];

export const getAgents = createAsyncThunk<
  ActionProps,
  ValuesProps,
  { rejectValue: RejectWithValueProps }
>("getAgents", async (_, { rejectWithValue }) => {
  try {
    const { data } = await useAuthAxios.get(`/agents`);
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

const initialState = {
  agents: null,
  isLoading: false,
  error: null,
} satisfies AgentStateProps as AgentStateProps;

export const agentSlice = createSlice({
  name: "getAgents",
  initialState,
  reducers: {
    reset: (state) => {
      state.agents = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAgents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAgents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.agents = action.payload;
    });
    builder.addCase(getAgents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = agentSlice.actions;
export default agentSlice.reducer;
