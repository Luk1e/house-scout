import { combineReducers } from "redux";
import { citySlice, regionSlice, estatesSlice } from "../toolkit";

const rootReducer = combineReducers({
  city: citySlice,
  region: regionSlice,
  estates: estatesSlice,
});

export default rootReducer;
