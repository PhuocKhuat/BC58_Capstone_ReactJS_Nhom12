import React from "react";
import FormLogin from "./FormLogin";
import "./styles.css";
import LoginSlick from "./LoginSlick";

export default function LoginPage() {
  return (
    <div className="container grid grid-cols-2 loginPage">
      <FormLogin />
      <LoginSlick />
    </div>
  );
}
