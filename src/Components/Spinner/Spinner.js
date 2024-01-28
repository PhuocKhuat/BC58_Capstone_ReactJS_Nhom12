import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);
  // console.log("🚀 ~ Spinner ~ isLoading:", isLoading)
  return (
     isLoading  && (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
        className="flex justify-center items-center z-10"
      >
        <ClipLoader size={50} color="#d6b13d" />
      </div>
    )
  );
}
