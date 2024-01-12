import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carousel: [],
}

const carouselSlice = createSlice({
  name: "carouselSlice",
  initialState,
  reducers: {
    setListBanner: (state, action)=>{
      state.carousel = action.payload;
    },
  }
});

export const { setListBanner } = carouselSlice.actions

export default carouselSlice.reducer