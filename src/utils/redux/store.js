import { configureStore } from "@reduxjs/toolkit";
import entriesAndPaginationSlice from "./features/entriesAndPaginateSlice";

export const store = configureStore({
  reducer: { entriesAndPaginationSlice },
});
