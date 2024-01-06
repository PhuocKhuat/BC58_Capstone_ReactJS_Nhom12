import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("User_Info")),
  movieList: [],
  isHovering: -1,
}

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    setUser: (state, action)=>{
      state.user = action.payload;
    },
    setMovieList : (state, action)=>{
      state.movieList = action.payload;
    },
    setIsHovering: (state, action)=>{
      state.isHovering = action.payload;
    },
  }
});

export const { setUser, setMovieList, setIsHovering } = movieSlice.actions

export default movieSlice.reducer