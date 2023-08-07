import React from "react";
import "../styles/footer.css";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <div>
      <div className="footer-ctnr">
        <SocialMedia />

        <footer className="footer">
          <div className="footer-column">
            <p>SHOP</p>
            <p> Bottoms</p>
            <p> Tops </p>
            <p> Dresses </p>
            <p> Accessories </p>
          </div>
          <div className="footer-column">
            <p>HELP</p>
            <p>Shipping</p>
            <p>Returns & Exchanges</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-column">
            <p>ABOUT US</p>
            <p>About Pura Vida</p>
            <p>Sustainability</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div className="footer-column">
            <p>PURA VIDA</p>
            <p>2023 All Rights Reserved</p>
            <hr />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
