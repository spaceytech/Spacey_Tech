import React, { Component } from "react";
import FormLogin from "../Ui/FormLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signin">
      <Link to="/" className="signin__logo">
        <h2 className="navigation__logo">
          spacey<span style={{ color: "rgb(0, 188, 135)" }}>.</span>
        </h2>
      </Link>
      <FormLogin />
    </div>
  );
};

export default Login;
