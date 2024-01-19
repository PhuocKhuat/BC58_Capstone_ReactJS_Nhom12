import React, { useEffect } from "react";
import "./styles.css";
import LoginSlick from "./LoginSlick";
import FormLogin from "./FormLogin";

export default function LoginPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div className="loginPage">
    <FormLogin/>
    <LoginSlick/>
    </div>
    
  );
}
