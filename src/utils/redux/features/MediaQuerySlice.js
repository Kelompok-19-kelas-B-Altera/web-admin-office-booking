import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const MediaQuerySlice = createSlice({
  name: "mediaQuery",
  initialState: {
    maxWidth: 1360,
  },
  reducers: {},
});

export default MediaQuerySlice.reducer;
