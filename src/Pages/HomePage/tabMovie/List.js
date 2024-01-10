import moment from "moment";
import React from "react";

export default function List({ dSPhim }) {
  return (
    <div className="space-y-12 overflow-y-scroll" style={{ height: 550 }}>
      {dSPhim.map((phim) => (
        <div className="flex space-x-5">
          <img alt="" className="w-20 h-32 object-cover" src={phim.hinhAnh} />
          <div>
            <p className="tenPhim">{phim.tenPhim}</p>
            <div className="grid grid-cols-3">
              {phim.lstLichChieuTheoPhim.map((khungGio, index) => (
                <p key={index} className="khungGio">
                  {moment(khungGio.ngayChieuGioChieu).format(
                    "MMM Do YY - hh:mm"
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
