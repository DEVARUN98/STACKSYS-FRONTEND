import React from "react";

const services = [
  {
    title: "Custom web apps",
    desc: "End‑to‑end business apps from requirements to deployment.",
  },
  {
    title: "API & backend",
    desc: "Robust REST APIs, auth, and integrations with third‑party services.",
  },
  {
    title: "Dashboards & internal tools",
    desc: "Admin panels, billing dashboards, and reporting systems.",
  },
  {
    title: "Maintenance & support",
    desc: "Ongoing improvements, refactors, and production monitoring.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <h2>Services</h2>
      <p className="section-subtitle">
        Stacksys focuses on stable, testable, and scalable software for small
        and medium businesses.
      </p>
      <div className="grid">
        {services.map((s) => (
          <article key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
