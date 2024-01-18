import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../../Redux/detailSlice";
import "./style.css";
import { Rate } from "antd";

export default function DetailPage() {
  let { idPhim } = useParams();
  //   console.log("🚀 ~ DetailPage ~ idPhim:", idPhim);
  let { detail } = useSelector((state) => state.detailSlice);
  //   console.log("🚀 ~ DetailPage ~ detail:", detail)
  let dispatch = useDispatch();
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
      .then((res) => {
        console.log(res);
        dispatch(setDetail(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className="container">
      <div className="ms-3 sm:ms-5">
        <div className="movieContent">
          <span className="movieContents">Movie Content</span>
        </div>
        <div className="borderName nameMovie block md:hidden">
          <span className="tenPhim">{detail?.tenPhim}</span>
        </div>
        <div className="flex space-x-4 md:space-x-10 infoPhim">
          <div>
            <img alt="" className="imgDetail" src={detail?.hinhAnh} />
          </div>
          <div>
            <div className="borderName hidden md:block">
              <span className="tenPhim">{detail?.tenPhim}</span>
            </div>
            <div>
              <div className="flex thongTin space-x-2">
                <label className="font-bold">Khởi chiếu:</label>
                <span>{detail?.ngayKhoiChieu}</span>
              </div>
              <div className="flex thongTin space-x-2">
                <label className="font-bold">Bí danh:</label>
                <span>{detail?.biDanh}</span>
              </div>
              <div className="flex thongTin space-x-2">
                <label className="font-bold">Mô tả:</label>
                <span>{detail?.moTa}</span>
              </div>
              <div className="mt-2">
                <Rate disabled defaultValue={detail?.danhGia / 2} />
              </div>
              <span className="muaVe"><NavLink className="px-2 py-1 rounded inline-block buyTicket mt-3">
                BUY TICKET
              </NavLink></span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
