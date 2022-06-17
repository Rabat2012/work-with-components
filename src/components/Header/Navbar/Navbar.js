import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="header-bc">
        <div className="header-nav">
          <h1>Programmers</h1>
          <nav className="header-nav-main">
            <ul className="header-ul">
              <li className="nav-li">Главная</li>
              <li className="nav-li">Адреса</li>
              <li className="nav-li">Специалисты</li>
              <li className="nav-li">Цены</li>
              <li className="nav-li">Информационная</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
