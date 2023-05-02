import React from "react";
import "./styles.css";
const Footer = () => {
  return (
    <div className="footer">
      <footer class="footerWrapper">
        <span style={{ color: "gold" }}>
          # 2023 <span>@Manoj Kumar</span>. All Rights Reserved.
        </span>
        <ul class="listStyles">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Licensing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </footer>
      <div className="footerImg">
        <img
          src="https://seeklogo.com/images/L/line-art-car-logo-99DBB62CB3-seeklogo.com.png"
          alt="logo"
          style={{ width: "10vw" }}
        />
        <div>EvZone</div>
      </div>
    </div>
  );
};

export default Footer;
