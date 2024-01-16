import React from "react";
import FormLogin from "./FormLogin";
import "./style.css";
import LoginSlick from "./LoginSlick";

export default function LoginPage() {
  return (
    <div className="container">
      <FormLogin />
      <LoginSlick />
    </div>
  );
}
