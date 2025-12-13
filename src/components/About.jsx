import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Stacksys</h2>
      <p className="section-subtitle">
        Stacksys is a software company focused on practical, reliable solutions
        instead of over‑engineered demos.
      </p>
      <div className="grid-two">
        <div className="card">
          <h3>How Stacksys works</h3>
          <ul className="list">
            <li>Discuss requirements and constraints clearly.</li>
            <li>Design an architecture that fits your team and budget.</li>
            <li>Deliver incrementally with frequent feedback.</li>
            <li>Document key flows and provide handover.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Why teams choose Stacksys</h3>
          <ul className="list">
            <li>Full‑stack expertise: frontend, backend, and database.</li>
            <li>Experience with billing, insurance, and internal tools.</li>
            <li>Modern stack with React and RESTful APIs.</li>
            <li>Focus on maintainability and developer experience.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
