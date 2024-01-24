import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   detail: null,
   tTLChieu: null,
}

const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    setDetail: (state, action)=>{
      state.detail = action.payload;
    },
    settTLChieu : (state, action) =>{
      state.tTLChieu = action.payload;
    }
  }
});

export const { setDetail, settTLChieu } = detailSlice.actions

export default detailSlice.reducer