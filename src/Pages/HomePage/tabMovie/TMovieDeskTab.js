import React, { useEffect } from "react";
import { Tabs, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import './style.css'
import { tapMovieActions } from "../../../Redux/tapMovieSlice";

const onChange = (key) => {
  //   console.log(key);
};
const TMovieDeskTab = () => {
  let dispatch = useDispatch();
  let { listSystemCinema } = useSelector((state) => state.tapMovieSlice);
  // console.log("🚀 ~ TabMovie ~ listSystemCinema:", listSystemCinema)
  useEffect(() => {
    dispatch(tapMovieActions());
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
                <div key={index} className="tabCol2">
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
                <List dSPhim = {cumRap.danhSachPhim} />
              ),
            };
          })}
        />
      ),
    };
  });
  return (
    <div className="tabCol1">
      <Tabs
      tabPosition="left"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="container border"
      style={{ height: 620, width: "998px"}}
    />
    </div>
  );
};
export default TMovieDeskTab;
