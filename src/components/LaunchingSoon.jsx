import React, { useState } from 'react';
import './LaunchingSoon.css'; 
import dentstacklogo from './dentstacklogo.png'; 
import dentstacklogoblack from './dentstackpnglogoblack.png'; 

export default function LaunchingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
      setEmail('');
      setMessage('');
    }
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
        subject: "New Demo Request - DentStack",
        from_name: "StackSys Website",
        email: email,
        message: message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Thank you! Your demo request has been submitted.");

      setIsModalOpen(false);
      setEmail("");
      setMessage("");
    } else {
      alert(data.message || "Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Unable to submit your request. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="launch-wrapper">
      <div className="launch-container-split">
        
        {/* Left Side: Brand Logo Container */}
        <div className="left-brand-panel">
          <img 
            src={dentstacklogoblack} 
            alt="Dentstack Smart Clinic Management" 
            className="brand-featured-logo"
          />
        </div>

        {/* Right Side: Copywriting Content Panel */}
        <div className="right-content-panel">
          <div className="panel-inner-content">
            <h1 className="neon-text">LAUNCHING SOON</h1>
            <p className="sub-text">
              Get ready to experience Smart Clinic Management System.
            </p>
            
            <button className="demo-btn" onClick={openModal}>
              Book a Demo
              
            </button>
          </div>
        </div>

      </div>

      {/* Modal Popup Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-btn" 
              onClick={closeModal} 
              disabled={isSubmitting}
            >
              &times;
            </button>
            
            <h2>Book a Demo</h2>
            <p>Interested in Dentstack? Leave your email and details below to reserve your demo session.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="modal-email">Email Address</label>
                <input 
                  type="email" 
                  id="modal-email" 
                  required 
                  disabled={isSubmitting}
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-message">Notes / Requirements</label>
                <textarea 
                  id="modal-message" 
                  rows="4" 
                  disabled={isSubmitting}
                  placeholder="Tell us about your clinic layout or specific needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Request Demo Link"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
