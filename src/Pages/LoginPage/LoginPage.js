import React, { useEffect } from "react";
import FormLogin from "./FormLogin";
import "./styles.css";
import LoginSlick from "./LoginSlick";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div className="container loginPage">
      <FormLogin />
      <LoginSlick/>
      <h2 className="pt-5 ps-10 font-semibold text-white dangNhap">
        <NavLink className="dangNhapSpan">LOGIN</NavLink>
        <NavLink className="dangNhapSpan">SIGNUP</NavLink>
      </h2>
    </div>
  );
}
