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
    // autoplay: true,
    // speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // duration: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slicks">
      <Slider {...settings} className="loginSlick">
        <div className="cTKMai">
          <img className="img1" alt="vePhim" src="/img/vePhimVang.png" />
          <div className="khuyenMaiVe">
          <h3 className="chuongTrinh">Chương trình khuyến mãi</h3>
          <p>Nhiều chương trình hấp dẫn dành riêng cho CyberMovie</p>
          </div>
        </div>
        <div className="cTKMai">
          <img className="img2" alt="vePhim" src="/img/comBoBapVaVePhim.png" />
          <div className="khuyenMaiBap">
          <h3 className="chuongTrinh">Chương trình cặp đôi</h3>
          <p className="moTa">Khi một cặp đôi đi xem phim cùng nhau sẽ được miễn phí bắp</p>
          </div>
        </div>
        <div className="cTKMai">
          <img className="img3" alt="vePhim" src="/img/xu.png" />
          <div className="khuyenMaiXu">
          <h3 className="chuongTrinh">Chương trình tích điểm</h3>
          <p>1 điểm = 1.000 VND dành cho tất cả các rạp trên toàn quốc</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
