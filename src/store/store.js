import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../features/sliderSlice";
import ProductsSlice from "../features/productsSlice";
import pagesSlice from "../features/pagesSlice";
export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    pages: pagesSlice,
  },
});
