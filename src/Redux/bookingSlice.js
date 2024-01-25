import { createSlice } from '@reduxjs/toolkit'
import { ThongTinLichChieu } from '../Object/ThongTinPhongVe';

const initialState = {
    thongTinRap: new ThongTinLichChieu(),
}

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    setTTRap: (state, action)=>{
      state.thongTinRap = action.payload;
    },
  }
});

export const { setTTRap } = bookingSlice.actions

export default bookingSlice.reducer

// Tới 32:04