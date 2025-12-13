import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out to Stacksys!");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="section-subtitle">
        Share your project idea, and Stacksys will respond with a proposal and
        timeline.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </label>
        <label>
          Project details
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn-primary">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
