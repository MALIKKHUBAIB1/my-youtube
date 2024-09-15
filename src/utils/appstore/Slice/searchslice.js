import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // return { ...action.payload, ...state }; we can not do like this
      // state = Object.assign(state, action.payload);
      //LRU (least recently used) if we have more than one hundred cache results then delete from starting
      if (Object.keys(state).length > 100) {
        const firstKey = Object.keys(state)[0]; // Get the first key
        if (firstKey) {
          delete state[firstKey]; // Delete the first key-value pair
        }
      }
      Object.assign(state, action.payload);
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

// implment cahche to check if it is already exist in the map or memory then dont make api call for this keyword if it is not exist then make api call
// we will store in the object intead of array becz of the obj cpmpxcity is o(1) and array is o(n)

// i can use LRU caching overHerer means if the storage size is larger then i will move the data from  memroy that is the least recently used
