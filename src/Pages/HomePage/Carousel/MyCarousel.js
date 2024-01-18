import React, { useEffect } from "react";
import { https } from "../../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setListBanner } from "../../../Redux/carouselSlice";
import { Carousel } from "antd";
import "./style.css";

let contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MyCarousel = () => {
  const { carousel } = useSelector((state) => state.carouselSlice);
  // console.log("🚀 ~ Carousel ~ carousel:", carousel);
  const dispatch = useDispatch();
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

  const renderBanner = () => {
    return carousel.map((banner, index) => {
      return (
        <div key={index} className="banner">
          <h3
            style={{
              ...contentStyle,
              backgroundImage: `url(${banner.hinhAnh})`,
              objectFit: "cover"
            }}
            className="imgCarousel"
          >
            <img alt="" className="w-full opacity-0" src={banner.hinhAnh} />
          </h3>
        </div>
      );
    });
  };

  return (
    <Carousel autoplay className="container carousel">
      {renderBanner()}
    </Carousel>
  );
};
export default MyCarousel;
