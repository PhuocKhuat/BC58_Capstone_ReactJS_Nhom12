import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import movieSlice from "./Redux/movieSlice";
import { configureStore } from "@reduxjs/toolkit";
import spinnerSlice from "./Redux/spinnerSlice";
import carouselSlice from "./Redux/carouselSlice";
import footerSlice from "./Redux/footerSlice";
import tapMovieSlice from "./Redux/tapMovieSlice";
import detailSlice from "./Redux/detailSlice";
import bookingSlice from "./Redux/bookingSlice";
import * as signalR from '@microsoft/signalr';
import { DOMAIN } from "./Config/config";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();
  export let store = configureStore({
    reducer: {
      movieSlice,
      spinnerSlice,
      carouselSlice,
      footerSlice,
      tapMovieSlice,
      detailSlice,
      bookingSlice,
    },
  });
connection.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
