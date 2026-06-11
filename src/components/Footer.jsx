import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Stacksys Software Consulting.</p>
      </div>
    </footer>
  );
};

export default Footer;
