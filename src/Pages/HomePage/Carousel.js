import React, { useEffect } from "react";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setListBanner } from "../../Redux/carouselSlice";

export default function Carousel() {
    let { carousel } = useSelector(state => state.carouselSlice);
    console.log("🚀 ~ Carousel ~ carousel:", carousel)
    let dispatch = useDispatch();
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        console.log(res);
        dispatch(setListBanner(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
}
