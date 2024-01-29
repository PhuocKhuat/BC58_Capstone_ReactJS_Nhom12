import React, { useEffect } from "react";
import { https } from "../../Service/api";
import { useDispatch, useSelector } from "react-redux";
import { setResultBooking } from "../../Redux/bookingSlice";
import moment from "moment";
import _ from "lodash";

export default function ResultBooking() {
  const { resultBooking } = useSelector((state) => state.bookingSlice);
  console.log("🚀 ~ ResultBooking ~ ResultBooking:", resultBooking);
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log(res);
        dispatch(setResultBooking(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderResult = () => resultBooking?.thongTinDatVe?.map((ve, index) => (
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full historyPhim" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src={ve?.hinhAnh}
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold">
              {ve?.tenPhim}
            </h2>
            <p className="text-gray-500">{moment(ve?.ngayDat).format("hh:mm A - DD-MM-YYYY")}</p>
            <p>{_.first(ve?.danhSachGhe)?.tenHeThongRap} - {_.first(ve?.danhSachGhe)?.tenCumRap}</p>
            <p>Seats: {ve?.danhSachGhe.map((ghe, index)=> (
              <span key={index}>{ghe.tenGhe}, </span>
            ))}.</p>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="text-gray-600 body-font resultBooking">
      <div className="px-5 py-24 mx-auto ticketResult">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 titleTicket">
            Tickets Results
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please see the location and time information so you don't miss the
            movie!
          </p>
        </div>
        <div className="flex flex-wrap -m-2 historyNPhim">
          {renderResult()}
        </div>
      </div>
    </section>
  );
}
