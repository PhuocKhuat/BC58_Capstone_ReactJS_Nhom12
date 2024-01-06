import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  let { user } = useSelector((state) => state.movieSlice);
  // console.log("🚀 ~ file: Header.js:6 ~ Header ~ user:", user);
  let handleLogOut = ()=>{
    localStorage.removeItem("User_Info");
    window.location.reload();
  }
  let renderUser = () => {
    if (user) {
      return (
        <>
          <span className="">{user.taiKhoan}</span>
          <button className="logout" onClick={handleLogOut}>LOGOUT</button>
        </>
      );
    }
    return (
      <>
        <NavLink className="login flex" to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 user"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>{" "}
          LOGIN
        </NavLink>
        <button className="signup flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 user"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          SIGNUP
        </button>
      </>
    );
  };
  return (
    <div>
      <div>

      </div>
      <div
        className="shadow shadow-black"
        style={{ backgroundColor: "#1f2022" }}
      >
        <div className="h-24 flex justify-between items-center container">
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            <img alt="Logo CyberSoft" className="w-48" src="/logo.png" />
          </button>
          <div className="flex space-x-5 text-white">{renderUser()}</div>
        </div>
      </div>
    </div>
  );
}
