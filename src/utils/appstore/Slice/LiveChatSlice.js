import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const newMessage = action.payload;
      if (state.message.length >= 30) {
        state.message = [...state.message.slice(1), newMessage];
      } else {
        state.message.push(newMessage);
      }
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
