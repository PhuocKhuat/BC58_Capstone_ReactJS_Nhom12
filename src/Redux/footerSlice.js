import { createSlice } from "@reduxjs/toolkit";
// import { https } from "../Service/api";

// export const footerSliceAction = createAsyncThunk(
//   "footerSliceAction",
//   async () => {
//     let res = await https.get("/api/QuanLyRap/LayThongTinHeThongRap");
//     console.log("🚀 ~ footerSliceAction ~ res:", res);
//     return res.data.content;
//   }
// );

const initialState = {
  infoRap: [],
};

const footerSlice = createSlice({
  name: "footerSlice",
  initialState,
  reducers: {
    setInfoRap: (state, action) => {
      state.infoRap = action.payload;
    },
  },
  // extraReducers: {
  //   [footerSliceAction.fulfilled]: (state, action) => {
  //     state.infoRap = action.payload;
  //   },
  //   [footerSliceAction.pending]: (state, action) => {
  //     state.infoRap = action.payload;
  //   },
  // },
});

export const { setInfoRap } = footerSlice.actions;

export default footerSlice.reducer;
