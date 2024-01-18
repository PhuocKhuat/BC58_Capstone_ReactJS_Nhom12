import React, { useEffect } from "react";
import Slider from "react-slick";
import styleSlick from "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { https } from "../../Service/api";
import {  GP09 } from "../../Settings/config";
import { setMovieList } from "../../Redux/movieSlice";
import MovieList from "./MovieList";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
export default function MultipleSlick() {
  let { movieList } = useSelector((state) => state.movieSlice);
  console.log("🚀 ~ MultipleSlick ~ movieList:", movieList)
  // console.log("🚀 ~ file: MultipleSlick.js:35 ~ MultipleSlick ~ isHovering:", isHovering)
  let dispatch = useDispatch();
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GP09}`)
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
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 6,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };

  return (
    <div className="container">
      <Slider {...settings} className="slider">
        {movieList.map((movie, index) => <MovieList movie={movie} index={index}/>)}
      </Slider>
    </div>
  );
}
