import React from "react";

const Deactivate = props => {
  return (
    <div className="profile__wrapper--component__password">
      <div className="profile__wrapper--component__password--headline">
        <h1>Deactivate</h1>
      </div>
      <p
        style={{
          fontSize: "2rem",
          fontFamily: "Lato, sans-serif"
        }}
      >
        Once you've deactivated your account, you will no longer be able to log
        in to the Spacey. This action cannot be undone.
      </p>
      <div className="button">
        <button
          style={{
            padding: "2rem",
            border: "2px solid var(--light-green)",
            borderRadius: "5px",
            background: "white",
            color: "var(--light-green)",
            fontSize: "1.7rem"
          }}
        >
          Deactivate account
        </button>
      </div>
    </div>
  );
};

export default Deactivate;
