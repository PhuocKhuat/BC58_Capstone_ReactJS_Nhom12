import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setDetail, settTLChieu } from "../../Redux/detailSlice";
import "./styleDetail.css";
import { Rate, Tabs, Tooltip } from "antd";
import ListGioChieu from "./ListGioChieu";

export default function DetailPage() {
  let { idPhim } = useParams();
  //   console.log("🚀 ~ DetailPage ~ idPhim:", idPhim);
  let { detail } = useSelector((state) => state.detailSlice);
  //   console.log("🚀 ~ DetailPage ~ detail:", detail)
  let { tTLChieu } = useSelector((state) => state.detailSlice);
  console.log("🚀 ~ DetailPage ~ tTLChieu:", tTLChieu);
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
  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idPhim}`)
      .then((res) => {
        console.log(res);
        dispatch(settTLChieu(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const onChange = (key) => {
    console.log(key);
  };
  const items = tTLChieu?.heThongRapChieu?.map((heThongRap, index) => {
    return {
      key: heThongRap.tenHeThongRap,
      label: (
        <img
          key={index}
          alt="hình ảnh hệ thống rạp"
          src={heThongRap?.logo}
          className="w-12"
        />
      ),
      children: (
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          items={heThongRap?.cumRapChieu.map((cumRap, index) => {
            return {
              key: cumRap?.tenCumrap,
              label: (
                <div className="tabCol2" key={index}>
                  <Tooltip title={cumRap?.tenCumRap}>
                    <h2 className="tenCumRap truncate">{cumRap?.tenCumRap}</h2>
                  </Tooltip>
                  <Tooltip title={cumRap?.diaChi}>
                    <p className="diaChi truncate">{cumRap?.diaChi}</p>
                  </Tooltip>
                </div>
              ),
              children: <ListGioChieu ListChieuPhim={cumRap?.lichChieuPhim} />,
            };
          })}
        />
      ),
    };
  });
  return (
    <div className="container detailMovie">
      <div className="ms-3 sm:ms-5 detaiAll">
        <div className="movieContent">
          <span className="movieContents">Movie Content</span>
        </div>
        <div className="borderName nameMovies block md:hidden">
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
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            onChange={onChange}
            items={items}
            style={{ height: 180 }}
            className="border"
          />
        </div>
      </div>
    </div>
  );
}
