import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { https } from "../Service/api";

const initialState = {
  listSystemCinema: [],
};

export const tapMovieActions = createAsyncThunk("tapMovieActions", async () => {
  let res = await https.get(
    "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
  );
  return res.data.content;
});

const tapMovieSlice = createSlice({
  name: "tapMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(tapMovieActions.fulfilled, (state, action)=>{
      state.listSystemCinema = action.payload;
    },)
  },
});

export const {} = tapMovieSlice.actions;

export default tapMovieSlice.reducer;
