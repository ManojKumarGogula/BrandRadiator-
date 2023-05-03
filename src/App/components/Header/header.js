import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Header = () => {
  const navigate = useNavigate();

  const elementRef = useRef(null);
  const navRef = useRef(null);
  const handleClick = () => {
    const element = elementRef.current;
    const navElement = navRef.current;
    element.classList.toggle("active");
    navElement.classList.toggle("active");
  };

  return (
    <header>

      <div class="container">

        <nav class="navbar">
          <div className="imagewrapper">
        <img
          src="https://seeklogo.com/images/L/line-art-car-logo-99DBB62CB3-seeklogo.com.png"
          alt="logo"
          className="navImg"
        />
        <span>EvZone</span>
        </div>
          <ul class="nav-menu" ref={navRef}>
            <li class="nav-item">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="/contactUs" class="nav-link">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="/signin" class="nav-link">
                Admin
              </a>
            </li>
          </ul>
          <div class="hamburger" ref={elementRef} onClick={handleClick}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
