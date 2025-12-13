import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Stacksys Software Company.</p>
        {/* <p className="muted">Built with React.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
