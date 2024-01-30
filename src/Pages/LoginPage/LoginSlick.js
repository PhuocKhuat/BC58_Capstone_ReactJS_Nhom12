import React from "react";
import Slider from "react-slick";
import styleSlicks from "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlicks["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlicks["slick-prev"]}`}
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
    dots: true,
    rows: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // duration: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slicks">
      <Slider {...settings} className="loginSlick">
        <div className="cTKMai cTKMai1">
          <img className="img1" alt="vePhim" src="/img/vePhimVang.png" />
          <div className="khuyenMaiVe">
          <h3 className="chuongTrinh">Promotions</h3>
          <p>Many attractive programs exclusively for CyberMovie</p>
          </div>
        </div>
        <div className="cTKMai cTKMai2">
          <img className="img2" alt="vePhim" src="/img/bapVe.png" />
          <div className="khuyenMaiBap">
          <h3 className="chuongTrinh chuongTrinh2">Couple program</h3>
          <p className="moTa">Couples who go to the movies together get free corn</p>
          </div>
        </div>
        <div className="cTKMai cTKMai3">
          <img className="img3" alt="vePhim" src="/img/xu.png" />
          <div className="khuyenMaiXu">
          <h3 className="chuongTrinh chuongTrinh3">Point accumulation program</h3>
          <p>1 point = 1,000 VND for all theaters nationwide</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
