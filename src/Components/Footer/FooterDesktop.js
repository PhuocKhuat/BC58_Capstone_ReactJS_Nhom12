import React, { useEffect } from "react";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setInfoRap } from "../../Redux/footerSlice";

export default function FooterDesktop() {
  let { infoRap } = useSelector((state) => state.footerSlice);
  console.log("🚀 ~ FooterDesktop ~ infoRap:", infoRap);
  let dispatch = useDispatch();
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinHeThongRap")
      .then((res) => {
        console.log(res);
        dispatch(setInfoRap(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderPartners = () =>
    infoRap.map((logo) => (
      <ul>
        <li><img alt="" src={logo.logo} className="w-10"/></li>
      </ul>
    ));
  return (
    <div>
      <div>
        <div>{renderPartners()}</div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
