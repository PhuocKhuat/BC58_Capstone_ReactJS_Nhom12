import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { https } from "../../Service/api";
import { useParams } from "react-router-dom";
import {
  setCNhatGheKhach,
  setClearDSGhe,
  setDSDatGhe,
  setSwitchTab,
  setTTRap,
} from "../../Redux/bookingSlice";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import "./styleBooking.css";
import "../../Common/common.css";
import ThongTinDatVe from "../../Object/ThongTinDatVe";
import { connection } from "../..";
import { actionBooking } from "../../Actions/actionBooking";
import  _ from "lodash";

export default function BookingMovie() {
  let { user } = useSelector((state) => state.movieSlice);
  // console.log("🚀 ~ BookingMovie ~ user:", user);
  let { thongTinRap, dSDatGhe, gheUserKhacDat } = useSelector(
    (state) => state.bookingSlice
  );
  // console.log("🚀 ~ BookingMovie ~ datGhe:", datGhe)
  // console.log("🚀 ~ BookingMovie ~ danhSachGhe:", danhSachGhe)
  let { idMa } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    fetchMaLichChieu();
  }, []);
  
  let fetchMaLichChieu = async (thongTinDatVe) => {
    try {
      let res = await https.get(
        `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idMa}`
      );
      dispatch(setTTRap(res.data.content));
      // Vừa load trang của mình thì mất ghế của mình khi chưa ấn và cập nhật ghế của người khác.
      connection.invoke("loadDanhSachGhe", idMa);
      //Có 1 client nào đặt vé thành công thì load lại danh sách của bộ phim đó.
      connection.on("datVeThanhCong", () => {
        fetchMaLichChieu(thongTinDatVe);
      });
      connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
        console.log("loadDanhSachGheDaDat", dsGheKhachDat);
        // Loại mình khỏi danh sách.
        dsGheKhachDat = dsGheKhachDat.filter(
          (TaiKhoan) => TaiKhoan.taiKhoan !== user.taiKhoan
        );
        // Gộp dSGhe của nhiều user thành 1 mảng chung.
        let arrKhachDat = dsGheKhachDat.reduce((acc, item, index) => {
          let arrGhe = JSON.parse(item.danhSachGhe);
          return [...acc, ...arrGhe];
        },[]);
        console.log("🚀 ~ arrKhachDat ~ arrKhachDat:", arrKhachDat);
        // Đưa dữ liệu khách đặt cập nhật redux và lọc những phần tử trùng nhau vì .
        arrKhachDat = _.uniqBy(arrKhachDat, "maGhe");
        // Đẩy lên redux.
        dispatch(setCNhatGheKhach(arrKhachDat));
        //Khi ấn ghế, load trang thì mất ghế của mình và mất ghế của mình ở trang người khác.
        window.addEventListener("beforeunload", clearGhe);
        return () => {
          clearGhe();
          window.removeEventListener("huyDat", clearGhe);
        };
      });
    } 
    catch (error) {}
  };
  let clearGhe = () => {
    connection.invoke("huyDat", user.taiKhoan, idMa);
  };
  let handleDatVe = async (thongTinDatVe = new ThongTinDatVe()) => {
    try {
      await https.post("/api/QuanLyDatVe/DatVe", thongTinDatVe);
      fetchMaLichChieu(idMa);
    } catch (error) {}
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
      let cSSGheMinhDat = "";
      if (user.taiKhoan === ghe.taiKhoanNguoiDat) {
        cSSGheMinhDat = "gheMinhDat";
      }
      let cSSGheUserKhacDat = "";
      let indexGheUser = gheUserKhacDat.findIndex(
        (Ghe) => Ghe.maGhe === ghe.maGhe
      );
      if (indexGheUser !== -1) {
        cSSGheUserKhacDat = "gheUserKhacDat";
      }
      return (
        <Fragment key={index}>
          <button
            disabled={ghe.daDat || cSSGheUserKhacDat !== ""}
            className={`ghe ${cSSgheVip} ${cSSgheDaDat} ${cSSgheDangDat} ${cSSGheMinhDat} ${cSSGheUserKhacDat}`}
            onClick={() => {
              // dispatch(setDSDatGhe(ghe));
              dispatch(actionBooking(ghe, idMa));
            }}
          >
            {ghe.daDat ? (
              cSSGheMinhDat !== "" ? (
                <UserOutlined />
              ) : (
                <CloseOutlined />
              )
            ) : cSSGheUserKhacDat !== "" ? (
              <UserOutlined />
            ) : (
              ghe.stt
            )}
          </button>
          {/* {(index+1) % 10 === 0 ? <br/>: ""} */}
        </Fragment>
      );
    });

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="mt-5 relative">
            <div className="bg-black manHinh left-0 top-0 absolute mb-3"></div>
            <div className="trapezoid mt-3 relative top-7 "></div>
            <div className="dSGhe mt-8">{renderGhe()}</div>
          </div>
        </div>
        <div className="col-span-3 bg-white mt-5 p-5 col3">
          <h3 className="text-yellow-500 text-xl">Seat selection details</h3>
          <div className="mt-5 text-center flex justify-center tables">
            <table className="w-4/5 divide-y divide-gray-200">
              <thead className="p-5 bg-gray-50">
                <tr>
                  <th>Seats not yet booked</th>
                  <th>Seats are placed</th>
                  <th>Seats are being booked</th>
                </tr>
                <tr>
                  <td>
                    <p className="ghe">00</p>
                  </td>
                  <td>
                    <p className="ghe gheDaDat">X</p>
                  </td>
                  <td>
                    <p className="ghe gheDangDat">00</p>
                  </td>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <th>Vip Seats</th>
                  <th>Newly booked seats</th>
                  <th>Other users have made reservations</th>
                </tr>
                <tr>
                  <td>
                    <p className="ghe gheVip">00</p>
                  </td>
                  <td>
                    <p className="ghe gheMinhDat">
                      <UserOutlined />
                    </p>
                  </td>
                  <td>
                    <p className="ghe gheUserKhacDat">
                      <UserOutlined />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-center border-b-2 border-gray-200 text-yellow-500 text-2xl mb-3 mt-3">
              {dSDatGhe
                .reduce((acc, ghe, index) => acc + ghe.giaVe, 0)
                .toLocaleString()}{" "}
              VND
            </h3>
            <div className="border-b-2 border-gray-200">
              <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
              <p>Show date: {thongTinPhim.ngayChieu}</p>
              <p>Showtime: {thongTinPhim.gioChieu}</p>
              <p className="mb-3">
                Movie theater name: {thongTinPhim.tenCumRap}
              </p>
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
                <span className="text-black giaVeDaDat">
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
                onClick={async () => {
                  let thongTinDatVe = new ThongTinDatVe();
                  thongTinDatVe.maLichChieu = idMa;
                  thongTinDatVe.danhSachVe = dSDatGhe;
                  // console.log(
                  //   "🚀 ~ BookingMovie ~ thongTinDatVe:",
                  //   thongTinDatVe
                  // );
                  handleDatVe(thongTinDatVe);
                  await fetchMaLichChieu(thongTinDatVe.maLichChieu);
                  await dispatch(setClearDSGhe());
                  dispatch(setSwitchTab());
                  //Khi ấn vào ghế của mình thì tự động load trang của người khác
                  connection.invoke(
                    "datGheThanhCong",
                    user.taiKhoan,
                    thongTinDatVe.maLichChieu
                  );
                }}
              >
                Booking Movie
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="block md:hidden">
          <div>
            <h3 className="text-yellow-500 text-xl text-center seatSelectionMD">
              Seat selection details
            </h3>
            <div className="mt-5 text-center flex justify-center tablesMD">
              <table className="w-4/5 divide-y divide-gray-200">
                <thead className="p-5 bg-gray-50">
                  <tr>
                    <th>Seats not yet booked</th>
                    <th>Seats are placed</th>
                    <th>Seats are being booked</th>
                  </tr>
                  <tr>
                    <td>
                      <p className="ghe">00</p>
                    </td>
                    <td>
                      <p className="ghe gheDaDat">X</p>
                    </td>
                    <td>
                      <p className="ghe gheDangDat">00</p>
                    </td>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <th>Vip Seats</th>
                    <th>Newly booked seats</th>
                    <th>Other users have made reservations</th>
                  </tr>
                  <tr>
                    <td>
                      <p className="ghe gheVip">00</p>
                    </td>
                    <td>
                      <p className="ghe gheMinhDat">
                        <UserOutlined />
                      </p>
                    </td>
                    <td>
                      <p className="ghe gheUserKhacDat">
                        <UserOutlined />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col3MD">
            <h3 className="text-center border-b-2 border-gray-200 text-yellow-500 text-2xl mb-3 mt-3">
              {dSDatGhe
                .reduce((acc, ghe, index) => acc + ghe.giaVe, 0)
                .toLocaleString()}{" "}
              VND
            </h3>
            <div className="border-b-2 border-gray-200">
              <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
              <p>Show date: {thongTinPhim.ngayChieu}</p>
              <p>Showtime: {thongTinPhim.gioChieu}</p>
              <p className="mb-3">
                Movie theater name: {thongTinPhim.tenCumRap}
              </p>
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
                <span className="text-black giaVeDaDat">
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
            <div className="bookingMovie flex items-center">
              <button
                className="text-center btnBooking p-3 font-bold w-full text-white"
                onClick={async () => {
                  let thongTinDatVe = new ThongTinDatVe();
                  thongTinDatVe.maLichChieu = idMa;
                  thongTinDatVe.danhSachVe = dSDatGhe;
                  // console.log(
                  //   "🚀 ~ BookingMovie ~ thongTinDatVe:",
                  //   thongTinDatVe
                  // );
                  handleDatVe(thongTinDatVe);
                  await fetchMaLichChieu(thongTinDatVe.maLichChieu);
                  await dispatch(setClearDSGhe());
                  dispatch(setSwitchTab());
                  //Khi ấn vào ghế của mình thì tự động load trang của người khác
                  connection.invoke(
                    "datGheThanhCong",
                    user.taiKhoan,
                    thongTinDatVe.maLichChieu
                  );
                }}
              >
                Booking Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
