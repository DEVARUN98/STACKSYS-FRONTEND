// import React, { useState } from "react";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for reaching out to Stacksys!");
//     setForm({ name: "", email: "", company: "", message: "" });
//   };

//   return (
//     <section id="contact" className="section">
//       <h2>Contact</h2>
//       <p className="section-subtitle">
//         Share your project idea, and Stacksys will respond with a proposal and
//         timeline.
//       </p>
//       <form className="form" onSubmit={handleSubmit}>
//         <label>
//           Name
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Company
//           <input
//             name="company"
//             value={form.company}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Project details
//           <textarea
//             name="message"
//             rows="4"
//             value={form.message}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit" className="btn-primary">
//           Send message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;







import { useState } from 'react';

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

      <h2>Contact Us</h2>
      <p className="section-subtitle">
        Share your project idea, and <span className="logo-accent">Stack</span><span style={{color:'white'}}>Sys</span> will respond with a proposal and
        timeline.
      </p>
    
    <form className="form" onSubmit={onSubmit}>
      <label>Name
        <input type="text" name="name" required/>
      </label>
      <label htmlFor="">Email
        <input type="email" name="email" required/>
      </label>
      <label>Message
        <textarea name="message" rows="4" required></textarea>
      </label>
      <button type="submit" className="btn-primary">Submit</button>
      <p>{result}</p>
    </form>
    </section>
  );
}
