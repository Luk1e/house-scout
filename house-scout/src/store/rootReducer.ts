import { combineReducers } from "redux";
import {
  citySlice,
  agentSlice,
  regionSlice,
  estateSlice,
  estatesSlice,
  createAgentSlice,
  createEstateSlice,
  deleteEstateSlice,
} from "../toolkit";

const rootReducer = combineReducers({
  city: citySlice,
  agent: agentSlice,
  region: regionSlice,
  estates: estatesSlice,
  estate: estateSlice,
  createAgent: createAgentSlice,
  createEstate: createEstateSlice,
  deleteEstate: deleteEstateSlice,
});

export default rootReducer;
