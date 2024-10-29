import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <ul className="site-header__list">
              <li className="site-header__item">
                <Link className="site-header__item-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="site-header__item">
                <Link className="site-header__item-link" to={"/popular"}>
                  Popular
                </Link>
              </li>
              <li className="site-header__item">
                <Link className="site-header__item-link" to={"/toprated"}>Top Rated</Link>
              </li>
              <li className="site-header__item">
                <Link className="site-header__item-link" to={"/upcoming"}>Up Coming</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
