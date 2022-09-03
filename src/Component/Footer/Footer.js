import React from "react";
import "../Footer/Footer.css";
import FooterNav from "../FooterNav/FooterNav";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="backToTop">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          {" "}
          Back To Top
        </button>
      </div>
      <div className="Footer_Navbar">
        <div className="footer_nav">
          <FooterNav></FooterNav>
          <FooterNav></FooterNav>
          <FooterNav></FooterNav>
          <FooterNav></FooterNav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
