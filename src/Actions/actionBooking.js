import { connection } from "..";
import { setDSDatGhe } from "../Redux/bookingSlice";

export const actionBooking = (ghe, idMa) => {
  return async (dispatch, getState) => {
    // Đá lên slice.
    await dispatch(setDSDatGhe(ghe));
    //Call API về backend.
    let danhSachGheDangDat = getState().bookingSlice.dSDatGhe;
    let taiKhoan = getState().movieSlice.user?.taiKhoan;
    console.log("🚀 ~ danhSachGhe.map ~ dSDatGhe:", danhSachGheDangDat);
    console.log("🚀 ~ danhSachGhe.map ~ taiKhoan:", taiKhoan);
    console.log("idMa", idMa);
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
    //Call API signalR.
    // connection.invoke('datGhe', taiKhoan, danhSachGheDangDat, idMa);
  };
};
