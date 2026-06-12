

import { useState } from 'react';
import call_center from './../Call_Center.json'
import Lottie from 'lottie-react'


export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2d4cb002-5eae-4189-ae0f-e9d7e6b6c486");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");


    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-content">
          <h2>Contact Us</h2>

          <p className="section-subtitle">
            Share your project idea, and
            <span className="logo-accent"> Stack</span>
            <span style={{ color: "white" }}>Sys</span>
            {" "}will respond with a proposal and timeline.
          </p>
          <form className="form" onSubmit={onSubmit}>
            <label>Name
              <input type="text" name="name" required />
            </label>
            <label htmlFor="">Email
              <input type="email" name="email" required />
            </label>
            <label>Message
              <textarea name="message" rows="4" required></textarea>
            </label>
            <button type="submit" className="btn-primary">Submit</button>
            <p>{result}</p>
          </form>

          <form className="form">
            {/* form fields */}
          </form>
        </div>

        {/* Right Side */}
        <div className="contact-image">
          <Lottie
            animationData={call_center}
            loop={true}
            style={{ width: "450px" }}
          />
        </div>

      </div>
    </section>
  );
}
