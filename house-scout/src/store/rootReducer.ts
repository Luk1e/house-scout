import { combineReducers } from "redux";
import {
  citySlice,
  agentSlice,
  regionSlice,
  estatesSlice,
  createAgentSlice,
  createEstateSlice,
} from "../toolkit";

const rootReducer = combineReducers({
  city: citySlice,
  agent: agentSlice,
  region: regionSlice,
  estates: estatesSlice,
  createAgent: createAgentSlice,
  createEstate: createEstateSlice,
});

export default rootReducer;
