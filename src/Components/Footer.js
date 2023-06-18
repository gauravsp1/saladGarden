import React from "react";
import fb from "../images/fb.png";
import instagram from "../images/insta.png";
import whatsapp from "../images/whatsapp.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div class="footer-nav">
          <span className="footer-nav-item">About</span>
          <span className="footer-nav-item">Blog</span>
          <span className="footer-nav-item">iOS App</span>
          <span className="footer-nav-item">Android App</span>
        </div>
        <div class="footer-icon">
          <img className="footer-icon-image" loading="lazy" src={fb} />
          <img className="footer-icon-image" loading="lazy" src={instagram} />
          <img className="footer-icon-image" loading="lazy" src={whatsapp} />
          <img className="footer-icon-image" loading="lazy" src={twitter} />
        </div>
      </div>

      <span className="footer-lable">
        © 2020 Salad-Bar, Inc. All rights reserved.
      </span>
    </div>
  );
}

export default Footer;
