import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Header = () => {
  const navigate = useNavigate();
  // const hamburger = document.querySelector(".hamburger");
  // const navLinks = document.querySelector(".nav-links");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-links li");

  // console.log("ok", hamburger, navLinks, links);
  useEffect(() => {
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        links.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`;
          }
        });

        hamburger.classList.toggle("toggle");
      });
    }
  }, [hamburger, navLinks, links]);

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">Logo</a>
        </div>
        <ul className="nav-links" id="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/analysis">Analysis</a>
          </li>
          <li>
            <a href="/contactUs">ContactUs</a>
          </li>
          <li>
            <a href="/signin">Admin</a>
          </li>
        </ul>
        <div className="hamburger" id="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
