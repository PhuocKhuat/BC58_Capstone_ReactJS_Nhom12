import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../../Redux/detailSlice";
import "./style.css";

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
  return (
    <div className="container">
      <div>
        <div className="movieContent">
          <span className="movieContents">Movie Content</span>
        </div>
        <div className="flex space-x-10">
          <div>
            <img alt="" className="imgDetail" src={detail?.hinhAnh} />
          </div>
          <div>
            <div className="borderName">
              <span className="tenPhim">{detail?.tenPhim}</span>
            </div>
            <div>
              <div className="flex thongTin space-x-2">
                <label className="font-bold">Khởi chiếu:</label>
                <span>{detail.ngayKhoiChieu}</span>
              </div>
              <div className="flex thongTin space-x-2">
                <label className="font-bold">Bí danh:</label>
                <span>{detail.biDanh}</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
