import moment from "moment";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function List({ dSPhim }) {
  return (
    <div className="overflow-y-scroll tabCol3" style={{ height: 620 }}>
      {dSPhim.map((phim, index) => (
        <Fragment key={index} >
          <div className="phim">
            <img alt="" className="w-20 h-32 object-cover" src={phim.hinhAnh} />
            <div>
              <p className="tenPhim">{phim.tenPhim}</p>
              <div className="danhSachGio">
                {phim.lstLichChieuTheoPhim.map((khungGio, index) => (
                  <NavLink to="/booking" key={index} className="khungGio hover:border-black duration-200">
                    {moment(khungGio.ngayChieuGioChieu).format(
                      "MMM ddd D - hh:mm A"
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <hr className="hrTag ms-5"/>
        </Fragment>
      ))}
    </div>
  );
}
