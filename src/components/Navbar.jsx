import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="nav">
      <div className="nav-container">
        <button
          className="nav-logo"
          onClick={() => scrollToId("hero")}
          aria-label="Stacksys home"
        >
          <span className="logo-accent">Stack</span>Sys
        </button>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          <button onClick={() => scrollToId("services")}>Services</button>
          <button onClick={() => scrollToId("projects")}>Projects</button>
          <button onClick={() => scrollToId("about")}>About</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
