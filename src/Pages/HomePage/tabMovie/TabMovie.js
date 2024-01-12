import React, { useEffect } from "react";
import { Tabs, Tooltip } from "antd";
import { https } from "../../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setListSystemCinema } from "../../../Redux/movieSlice";
import List from "./List";
import './style.css'

const onChange = (key) => {
  //   console.log(key);
};
const TabMovie = () => {
  let dispatch = useDispatch();
  let { listSystemCinema } = useSelector((state) => state.movieSlice);
  console.log("🚀 ~ TabMovie ~ listSystemCinema:", listSystemCinema);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        console.log(res);
        dispatch(setListSystemCinema(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = listSystemCinema.map((heThongRap, index) => {
    return {
      key: heThongRap.maHeThongRap,
      label: <div>
        <img alt="" src={heThongRap.logo} className="w-14" key={index} />
        <hr className="w-full mt-4"/>
      </div>,
      children: (
        <Tabs
          tabPosition="left"
          style={{ height: 620 }}
          items={heThongRap.lstCumRap.map((cumRap, index) => {
            return {
              key: cumRap.tenCumRap,
              label: (
                <div key={index} className="text-left w-48 truncate">
                  <Tooltip title={cumRap.tenCumRap}>
                    <h2 className="tenCumRap">{cumRap.tenCumRap}</h2>
                  </Tooltip>
                  <Tooltip title={cumRap.diaChi}>
                    <p className="diaChi">{cumRap.diaChi}</p>
                  </Tooltip>
                  <hr className="w-full mt-7"/>
                </div>
              ),
              children: (
                <List  dSPhim = {cumRap.danhSachPhim} />
              ),
            };
          })}
        />
      ),
    };
  });
  return (
    <Tabs
      tabPosition="left"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="container border"
      style={{ height: 620, width: "998px"}}
    />
  );
};
export default TabMovie;
