import { combineReducers } from "redux";
import {
  citySlice,
  agentSlice,
  regionSlice,
  estateSlice,
  estatesSlice,
  createAgentSlice,
  createEstateSlice,
} from "../toolkit";

const rootReducer = combineReducers({
  city: citySlice,
  agent: agentSlice,
  region: regionSlice,
  estates: estatesSlice,
  estate: estateSlice,
  createAgent: createAgentSlice,
  createEstate: createEstateSlice,
});

export default rootReducer;
