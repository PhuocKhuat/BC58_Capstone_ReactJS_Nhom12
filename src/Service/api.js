import axios from "axios";
import { store } from "..";
import { setLoadingOff, setLoadingOn } from "../Redux/spinnerSlice";

export const https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    "TokenCybersoft ":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjExLzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODA2NDAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4MjExNjAwfQ.631rl3EwTQfz6CuufNTJlys36XLVmoxo29kP-F_PDKU",
     "Authorization": "bearer" + JSON.parse(localStorage.getItem("User_Info"))?.accessToken,
    },
});

// Add a request interceptor
https.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log("🚀 ~ request")
  store.dispatch(setLoadingOn());
  return config;
}, function (error) {
  // Do something with request error
  store.dispatch(setLoadingOff());
  return Promise.reject(error);
});

// Add a response interceptor
https.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  store.dispatch(setLoadingOff());
  console.log("🚀 ~ response")
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  store.dispatch(setLoadingOff());
  return Promise.reject(error);
});