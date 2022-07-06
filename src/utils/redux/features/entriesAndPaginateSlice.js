import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: 5,
  page: 0,
  totalPage: 1,
  totalData: 0,
  inputSearch: "",
};

export const entriesAndPaginationSlice = createSlice({
  name: "entriesAndPagination",
  initialState,
  reducers: {
    handleEntries: (state, payload) => {
      state.entries = payload.payload === "All" ? state.totalData : Number(payload.payload);
    },
    handlePage: (state, payload) => {
      state.page = payload.payload;
    },
    handleTotalPage: (state, payload) => {
      state.totalPage = payload.payload;
    },
    handleTotalData: (state, payload) => {
      state.totalData = payload.payload;
    },
    handleInputSearch: (state, payload) => {
      state.inputSearch = payload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleEntries, handlePage, handleTotalPage, handleTotalData, handleInputSearch } =
  entriesAndPaginationSlice.actions;

export default entriesAndPaginationSlice.reducer;
