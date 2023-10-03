import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./reducers/carReducer";

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
