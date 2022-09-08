import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </div>
      <div className="header__search">
        <input />
      </div>
      <div className="header__nav">
        <div className="header__nav__user">
          <span className="header__nav__line__one">Hello Guest</span>
          <span className="header__nav__line__two">Sign In</span>
        </div>
      </div>
      <div className="header__nav__item__basket">Cart</div>
    </header>
  );
}

export default Header;
