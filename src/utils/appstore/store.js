import { configureStore } from "@reduxjs/toolkit";
import appSliceReduce from "../appSlice";

const store = configureStore({
  reducer: { menu: appSliceReduce },
});
export default store;
