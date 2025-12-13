import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Stacksys Software Company</p>
          <h1>Full‑stack products that grow with your business.</h1>
          <p className="hero-subtitle">
            Stacksys builds modern web applications with clean architecture,
            scalable APIs, and beautiful UIs.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">
              View services
            </a>
            <a href="#contact" className="btn-secondary">
              Talk to our team
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p className="muted">Tech stack</p>
          <h3>React • Django REST • PostgreSQL</h3>
          <p className="muted">
            Optimized for reliability, performance, and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
