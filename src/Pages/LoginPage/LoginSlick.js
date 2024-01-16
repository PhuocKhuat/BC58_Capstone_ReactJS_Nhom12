import React from "react";
import Slider from "react-slick";
import styleSlick from "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export default function LoginSlick() {
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
  };
  return (
    <div>
      <Slider {...settings} className="loginSlick">
        <div>
          <img alt="vePhim" src="/img/vePhimVang.png" />
          <h3></h3>
        </div>
        <div>
          <img alt="vePhim" src="/img/comBoBapVaVePhim.png" />
          <h3></h3>
        </div>
        <div>
          <img alt="vePhim" src="/img/xu.png" />
          <h3></h3>
        </div>
      </Slider>
    </div>
  );
}
