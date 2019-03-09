import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__item">
        <h2>Discover</h2>
        <ul>
          <li>
            <a href="#"> How it works</a>
          </li>
          <li>
            <a href="#"> New user FAQ</a>
          </li>
          <li>
            <a href="#"> Find work</a>
          </li>
        </ul>
      </div>
      <div className="footer__item">
        <h2>Company</h2>
        <ul>
          <li>
            <a href="#"> About us</a>
          </li>
          <li>
            <a href="#"> Careers</a>
          </li>
          <li>
            <a href="#"> T&C</a>
          </li>
          <li>
            <a href="#"> Contact us</a>
          </li>
          <li>
            <a href="#"> Privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="footer__item">
        <h2>Members</h2>
        <ul>
          <li>
            <a href="#"> Post a task</a>
          </li>
          <li>
            <a href="#"> Browse tasks</a>
          </li>
        </ul>
      </div>
      <div className="footer__item">
        <h2>Categories</h2>
        <ul>
          <li>
            <a href="#"> General handyman</a>
          </li>
          <li>
            <a href="#"> Laundry</a>
          </li>
          <li>
            <a href="#"> Delivery</a>
          </li>
          <li>
            <a href="#"> Cleaning</a>
          </li>
          <li>
            <a href="#"> Flat pack assembly</a>
          </li>
          <li>
            <a href="#"> Installation</a>
          </li>
        </ul>
      </div>
      <div className="footer__download">
        <img src="/images/google-play.svg" alt="Google play" />
        <img src="/images/apple-store.svg" alt="Apple store" />
        <svg width="26" height="26" class="facebook-circle" viewBox="0 0 25 24">
          <path
            d="M12.5 0C19.404 0 25 5.372 25 12c0 6.627-5.596 12-12.5 12C5.597 24 0 18.627 0 12 0 5.372 5.597 0 12.5 0zm5.338 6H7.162a.662.662 0 0 0-.662.662v10.676c0 .365.296.662.662.662h5.748v-4.647h-1.564v-1.811h1.564v-1.336c0-1.55.946-2.394 2.329-2.394.662 0 1.231.05 1.397.072v1.62h-.959c-.752 0-.897.357-.897.882v1.156h1.793l-.233 1.811h-1.56V18h3.058a.662.662 0 0 0 .662-.662V6.662A.662.662 0 0 0 17.838 6z"
            fill="#B2BFC3"
            fill-rule="evenodd"
          />
        </svg>

        <svg width="26" height="26" class="twitter-circle" viewBox="0 0 25 24">
          <path
            d="M12.5 0C19.404 0 25 5.372 25 12c0 6.627-5.596 12-12.5 12C5.597 24 0 18.627 0 12 0 5.372 5.597 0 12.5 0zm-2.302 17.875c5.283 0 8.173-4.378 8.173-8.167 0-.124 0-.247-.005-.37A5.85 5.85 0 0 0 19.8 7.85c-.515.23-1.07.38-1.653.454a2.888 2.888 0 0 0 1.266-1.59c-.554.33-1.17.565-1.826.694a2.875 2.875 0 0 0-4.896 2.62 8.16 8.16 0 0 1-5.922-3 2.878 2.878 0 0 0 .89 3.835 2.907 2.907 0 0 1-1.299-.36v.04c0 1.388.992 2.552 2.303 2.815a2.868 2.868 0 0 1-1.294.051 2.872 2.872 0 0 0 2.683 1.993A5.765 5.765 0 0 1 5.8 16.593a8.176 8.176 0 0 0 4.398 1.282z"
            fill="#B2BFC3"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
