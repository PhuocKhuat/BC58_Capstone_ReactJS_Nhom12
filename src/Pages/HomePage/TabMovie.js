import React, { useEffect } from "react";
import { Tabs, Tooltip } from "antd";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setListSystemCinema } from "../../Redux/movieSlice";
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
      label: <img alt="" src={heThongRap.logo} className="w-14" key={index} />,
      children: (
        <Tabs
          tabPosition="left"
          style={{ height: 550 }}
          items={heThongRap.lstCumRap.map((cumRap, index) => {
            return {
              key: cumRap.tenCumRap,
              label: (
                <div key={index} className="w-48 truncate">
                  <Tooltip title={cumRap.tenCumRap}>
                    <h2>{cumRap.tenCumRap}</h2>
                  </Tooltip>
                  <Tooltip title={cumRap.diaChi}>
                    <p>{cumRap.diaChi}</p>
                  </Tooltip>
                </div>
              ),
              children: "",
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
      className="container tabMovie"
      style={{ height: 550 }}
    />
  );
};
export default TabMovie;
