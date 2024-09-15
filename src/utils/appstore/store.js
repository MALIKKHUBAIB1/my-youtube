import { configureStore } from "@reduxjs/toolkit";
import appSliceReduce from "../appSlice";
import searchslice from "./Slice/searchslice";
import LiveChatSlice from "./Slice/LiveChatSlice";

const store = configureStore({
  reducer: { menu: appSliceReduce, search: searchslice, chat: LiveChatSlice },
});
export default store;
