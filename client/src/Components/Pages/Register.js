import React, { Component } from "react";
import FormLogin from "../Ui/FormRegister";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <Link to="/" className="register__logo">
        <h2 className="navigation__logo">
          spacey<span style={{ color: "rgb(0, 188, 135)" }}>.</span>
        </h2>
      </Link>
      <FormLogin />
      <img src="/images/pattern.png" alt="Pattern" />
    </div>
  );
};

export default Register;
