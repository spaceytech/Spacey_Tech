import React from "react";
import PropTypes from "prop-types";

const NotFound = props => {
  return (
    <div className="notfound">
      <h1>404 Not Found</h1>
      <p>
        Oooops, something went wrong. I know it's{" "}
        <span
          style={{
            fontFamily: "Ubuntu, sans-serif",
            background: "white",
            color: "#ffb6c1",
            padding: "1rem"
          }}
        >
          #$@&%*!'ed
        </span>{" "}
        up
      </p>
    </div>
  );
};

export default NotFound;
