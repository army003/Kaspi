import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: "main",
};

export const pagesSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    toggleActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { toggleActivePage } = pagesSlice.actions;
export default pagesSlice.reducer;
