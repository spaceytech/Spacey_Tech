import React from "react";

const Header = props => {
  return (
    <header className="home__header">
      <img
        src="images/banner-2.png"
        alt="Header image"
        className="home__header--img"
      />
      <div className="home__header--info">
        <h1 className="home__header--heading">Get things done and dusted</h1>
        <p className="home__header--tagline">
          The most affordable and efficient way to get things done around the
          home
        </p>
        <a href="#" className="home__header--button button">
          <button>Get started</button>
        </a>
        <p className="home__header--link">
          See how it works <span className="underline" />
        </p>
      </div>
    </header>
  );
};

export default Header;
