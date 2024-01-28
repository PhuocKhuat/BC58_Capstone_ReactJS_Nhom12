import { createSlice } from '@reduxjs/toolkit'
import { ThongTinLichChieu } from '../Object/ThongTinPhongVe';

const initialState = {
    thongTinRap: new ThongTinLichChieu(),
    dSDatGhe: [],
    resultBooking: null,
}

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {
    setTTRap: (state, action)=>{
      state.thongTinRap = action.payload;
    },
    setDSDatGhe: (state, action)=>{
      // console.log(action.payload);
      let cloneDSDatGhe = [...state.dSDatGhe];
      let indexGhe = cloneDSDatGhe.findIndex(ghe => ghe.maGhe === action.payload.maGhe);
      indexGhe === -1 ? cloneDSDatGhe.push(action.payload)
      : cloneDSDatGhe.splice(indexGhe, 1);
      state.dSDatGhe = cloneDSDatGhe;
      // console.log("🚀 ~ cloneDSDatGhe:", cloneDSDatGhe)
    },
    setResultBooking : (state, action)=>{
      state.resultBooking = action.payload;
    },
    setClearDSGhe: (state, action)=>{
      state.dSDatGhe = [];
    },
  }
});

export const { setTTRap, setDSDatGhe, setResultBooking, setClearDSGhe } = bookingSlice.actions

export default bookingSlice.reducer