import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import movieSlice from './Redux/movieSlice';
import { configureStore } from '@reduxjs/toolkit';
import spinnerSlice from './Redux/spinnerSlice';
import carouselSlice from './Redux/carouselSlice';
import footerSlice from './Redux/footerSlice';
import tapMovieSlice from './Redux/tapMovieSlice';
import detailSlice from './Redux/detailSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let store = configureStore({
  reducer: {
    movieSlice,
    spinnerSlice,
    carouselSlice,
    footerSlice,
    tapMovieSlice,
    detailSlice,
  }
})
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
