import React from "react";

const Transactions = props => {
  return (
    <div className="profile__wrapper--component__password">
      <div className="profile__wrapper--component__password--headline">
        <h1>Transactions History</h1>
      </div>
      <p
        style={{
          fontSize: "1.7rem",
          fontFamily: "Lato, sans-serif",
          textAlign: "center"
        }}
      >
        You don't have any transactions history yet.
      </p>
    </div>
  );
};

export default Transactions;
