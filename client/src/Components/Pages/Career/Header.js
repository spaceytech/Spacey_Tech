import React from "react";
import { Link } from "react-router-dom";
import TaskerForm from "./TaskerForm";

const Header = props => {
  return (
    <div className="work__header">
      <Link to="/">
        <h2 className="navigation__logo">
          spacey<span style={{ color: "rgb(0, 188, 135)" }}>.</span>
        </h2>
      </Link>
      <div className="work__header--promotion">
        <h1>Start Tasking. Earn money your way.</h1>
        <p>
          Be someone's hero today. Earn money by helping people with their
          everyday to-dos.
        </p>
      </div>
      <TaskerForm />
    </div>
  );
};

export default Header;
