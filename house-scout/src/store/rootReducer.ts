import { combineReducers } from "redux";
import {
  citySlice,
  regionSlice,
  estatesSlice,
  createAgentSlice,
} from "../toolkit";

const rootReducer = combineReducers({
  city: citySlice,
  region: regionSlice,
  estates: estatesSlice,
  createAgent: createAgentSlice,
});

export default rootReducer;
