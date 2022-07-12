import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translateX: 0,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    translateSlider: (state, action) => {
      state.translateX(action.payload);
    },
  },
});

export const { translateSlider } = sliderSlice.actions;
export default sliderSlice.reducer;
