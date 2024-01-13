import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    infoRap: [],
}

const footerSlice = createSlice({
  name: "footerSlice",
  initialState,
  reducers: {
    setInfoRap: (state, action)=>{
      state.infoRap = action.payload;
    },
  }
});

export const { setInfoRap } = footerSlice.actions

export default footerSlice.reducer