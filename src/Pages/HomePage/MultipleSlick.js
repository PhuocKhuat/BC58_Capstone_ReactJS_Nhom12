import React, { useEffect } from "react";
import Slider from "react-slick";
import styleSlick from "./style.css";
import Meta from "antd/es/card/Meta";
import { Card, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { https } from "../../Service/api";
import { GP02 } from "../../Settings/config";
import { setIsHovering, setMovieList } from "../../Redux/movieSlice";
import { NavLink } from "react-router-dom";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block", backgroundColor: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
export default function MultipleSlick() {
  let { movieList, isHovering } = useSelector((state) => state.movieSlice);
  // console.log("🚀 ~ file: MultipleSlick.js:35 ~ MultipleSlick ~ isHovering:", isHovering)
  let dispatch = useDispatch();
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GP02}`)
      .then((res) => {
        console.log(res);
        dispatch(setMovieList(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const settings = {
    className: "center variable-width",
    centerMode: true,
    dots: false,
    infinite: true,
    centerPadding: "246px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesToScroll: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {movieList.map((movie, index) => (
          <div
            className="movie"
            key={index}
            onMouseEnter={() => {
              dispatch(setIsHovering(index));
            }}
            onMouseLeave={() => {
              dispatch(setIsHovering(-1));
            }}
          >
            <img
              alt="hinhAnh"
              src={movie.hinhAnh}
              className="imgMovie object-cover"
            />
            <div
              className={`rescriptionMovie space-x-2 ${
                isHovering === index ? "" : "hidden"
              }`}
            >
              <p className="nameMovie mb-2">{movie.tenPhim}</p>
              <NavLink className="px-2 py-1 rounded inline-block seeDetail">
                SEE DETAIL
              </NavLink>
              <NavLink className="px-2 py-1 rounded inline-block buyTicket">
                BUY TICKET
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
