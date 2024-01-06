import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("User_Info")),
  movieList: [],
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
  }
});

export const { setUser, setMovieList } = movieSlice.actions

export default movieSlice.reducer