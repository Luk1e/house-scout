import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export type DispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof rootReducer>;
