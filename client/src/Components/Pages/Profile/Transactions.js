import React from "react";

const Transactions = props => {
  return (
    <div className="profile__wrapper--component__password">
      <div className="profile__wrapper--component__password--headline">
        <h1>Transactions History</h1>
      </div>
      <p
        style={{
          textAlign: "center"
        }}
      >
        You don't have any transactions history yet.
      </p>
    </div>
  );
};

export default Transactions;
