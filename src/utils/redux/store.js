import { configureStore } from "@reduxjs/toolkit";
import entriesAndPaginationSlice from "./features/entriesAndPaginateSlice";
import MediaQueryReducer from "./features/MediaQuerySlice";

export const store = configureStore({
  reducer: { entriesAndPaginationSlice, mediaQuery: MediaQueryReducer },
});
