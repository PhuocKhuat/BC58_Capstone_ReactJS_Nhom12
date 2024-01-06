import React from "react";
import Slider from "react-slick";
import MovieList from "./MovieList";
import styleSlick from "./style.css";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick['slick-next']}` }
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

     const settings = {
      className: "center variable-width",
    //   centerMode: true,
      dots: true,
      infinite: true,
    //   centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 1,
      slidesToScroll: 1,
      slidesPerRow: 2,
      variableWidth: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
            <MovieList/>
        </Slider>
      </div>
    );
  }
