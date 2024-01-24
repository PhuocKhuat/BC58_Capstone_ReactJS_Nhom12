import React from "react";
import { useSelector } from "react-redux";

export default function PrivateLayout({ children }) {
  let { user } = useSelector((state) => state.movieSlice);
  return !user ? (window.location.href = "/login") : children;
}
