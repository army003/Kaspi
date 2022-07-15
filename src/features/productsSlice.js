import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
