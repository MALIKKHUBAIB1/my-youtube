import { configureStore } from "@reduxjs/toolkit";
import appSliceReduce from "../appSlice";
import searchslice from "./Slice/searchslice";

const store = configureStore({
  reducer: { menu: appSliceReduce ,search: searchslice},
});
export default store;
