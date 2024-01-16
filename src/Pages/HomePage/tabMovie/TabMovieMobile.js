import React, { useEffect } from "react";
import { Tabs, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import './style.css'
import { tapMovieActions } from "../../../Redux/tapMovieSlice";

const onChange = (key) => {
  //   console.log(key);
};
const TabMovieMobile = () => {
  let dispatch = useDispatch();
  let { listSystemCinema } = useSelector((state) => state.tapMovieSlice);
  // console.log("🚀 ~ TabMovie ~ listSystemCinema:", listSystemCinema)
  useEffect(() => {
    dispatch(tapMovieActions());
  }, []);
  const items = listSystemCinema.map((heThongRap, index) => {
    return {
      key: heThongRap.maHeThongRap,
      label: <div className="">
        <img alt="" src={heThongRap.logo} className="w-14" key={index} />
        <hr className="w-full mt-4"/>
      </div>,
      children: (
        <Tabs
          tabPosition="top"
          style={{ height: 650 }}
          items={heThongRap.lstCumRap.map((cumRap, index) => {
            return {
              key: cumRap.tenCumRap,
              label: (
                <div key={index} className="truncate cumKhuVuc ps-2">
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
    <div className="ms-2 allTab">
      <Tabs
      tabPosition="top"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="container border"
      style={{ height: 620, width: "998px"}}
    />
    </div>
  );
};
export default TabMovieMobile;

