import React from "react";

const projects = [
  {
    name: "BillStack",
    type: "Billing & inventory",
    desc: "Invoice and inventory management with role‑based access and PDF exports.",
    stack: "React, Django REST, PostgreSQL",
  },
  {
    name: "InsureStack",
    type: "Insurance platform",
    desc: "Vehicle insurance premium calculation with policy workflows.",
    stack: "React, Django REST, PostgreSQL",
  },
  {
    name: "MDM Console",
    type: "Device management",
    desc: "Internal device management portal with dashboards and audit logs.",
    stack: "React, Django, REST APIs",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="section-subtitle">
        A sample of products and internal tools delivered by Stacksys.
      </p>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.name} className="card">
            <h3>{p.name}</h3>
            <p className="muted">{p.type}</p>
            <p>{p.desc}</p>
            <p className="tagline">Stack: {p.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
