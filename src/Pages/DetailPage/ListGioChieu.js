import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ListGioChieu({ ListChieuPhim }) {
  return (
    <div className="tabCol3a">
      <div className="danhSachGio">
      {ListChieuPhim?.map((gioChieu, index) => (
        <NavLink to={`/booking/${gioChieu.maLichChieu}`} className="khungGioChieu hover:border-black duration-200" key={index}>
          {moment(gioChieu.ngayChieuGioChieu).format("MMM ddd D - hh:mm A")}
        </NavLink>
      ))}
      </div>
    </div>
  );
}
