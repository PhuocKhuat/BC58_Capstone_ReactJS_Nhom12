import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { https } from "../../Service/api";
import { useParams } from "react-router-dom";
import { setDSDatGhe, setTTRap } from "../../Redux/bookingSlice";
import { CloseOutlined } from "@ant-design/icons";
import "./styleBooking.css";
import "../../Common/common.css";
import ThongTinDatVe from "../../Object/ThongTinDatVe";

export default function BookingMovie() {
  let { user } = useSelector((state) => state.movieSlice);
  // console.log("🚀 ~ BookingMovie ~ user:", user);
  let { thongTinRap, dSDatGhe } = useSelector((state) => state.bookingSlice);
  // console.log("🚀 ~ BookingMovie ~ datGhe:", datGhe)
  // console.log("🚀 ~ BookingMovie ~ danhSachGhe:", danhSachGhe)
  let { idMa } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idMa}`)
      .then((res) => {
        console.log(res);
        dispatch(setTTRap(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let handleDatVe = (datVe) => {
    let datVes = datVe;
    https
      .post("/api/QuanLyDatVe/DatVe", datVes)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let { danhSachGhe, thongTinPhim } = thongTinRap;
  const renderGhe = () =>
    danhSachGhe.map((ghe, index) => {
      let cSSgheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let cSSgheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let cSSgheDangDat = "";
      let indexGhe = dSDatGhe.findIndex((Ghe) => Ghe.maGhe === ghe.maGhe);
      if (indexGhe !== -1) {
        cSSgheDangDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          <button
            disabled={ghe.daDat}
            className={`ghe ${cSSgheVip} ${cSSgheDaDat} ${cSSgheDangDat}`}
            onClick={() => {
              dispatch(setDSDatGhe(ghe));
            }}
          >
            {ghe.daDat ? <CloseOutlined /> : ghe.stt}
          </button>
          {/* {(index+1) % 10 === 0 ? <br/>: ""} */}
        </Fragment>
      );
    });

  return (
    <div className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="mt-5 relative">
            <div className="bg-black manHinh left-0 top-0 absolute mb-3"></div>
            <div className="trapezoid mt-3 relative top-7 "></div>
            <div className="mt-8 w-11/12">{renderGhe()}</div>
          </div>
        </div>
        <div className="col-span-3 bg-white mt-5 p-5">
          <h3 className="text-center border-b-2 border-gray-200 text-yellow-400 text-2xl mb-3 mt-3">
            0đ
          </h3>
          <div className="border-b-2 border-gray-200">
            <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
            <p>Show date: {thongTinPhim.ngayChieu}</p>
            <p>Showtime: {thongTinPhim.gioChieu}</p>
            <p className="mb-3">Movie theater name: {thongTinPhim.tenCumRap}</p>
          </div>
          <div className="grid grid-cols-2 my-3 border-b-2 border-gray-200">
            <div className="text-left">
              <span className="text-amber-800 text-lg">Chair: </span>
              {dSDatGhe.map((gheDangDat, index) => {
                return (
                  <span key={index} className="text-green-500 space-x-5">
                    {gheDangDat.stt},{(index + 1) % 9 === 0 ? <br /> : ""}
                  </span>
                );
              })}
            </div>
            <div className="text-right mb-3">
              <span className="text-black">
                {dSDatGhe
                  .reduce((acc, ghe, index) => acc + ghe.giaVe, 0)
                  .toLocaleString()}{" "}
                VND
              </span>
            </div>
          </div>
          <div className="my-3 border-b-2 border-gray-200">
            <p>Email</p>
            <p className="mb-3">{user.email}</p>
          </div>
          <div className="my-3 border-b-2 border-gray-200">
            <p>Phone Number</p>
            <p className="mb-3">{user.soDT}</p>
          </div>
          <div className="bookingMovie flex flex-col justify-end items-center">
            <button
              className="text-center btnBooking p-3 font-bold w-full text-white"
              onClick={() => {
                let thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = idMa;
                thongTinDatVe.danhSachVe = dSDatGhe;
                //  console.log("🚀 ~ BookingMovie ~ thongTinDatVe:", thongTinDatVe);
                handleDatVe(thongTinDatVe);
              }}
            >
              Booking Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
