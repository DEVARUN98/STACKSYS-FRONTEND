import React, { useState ,useEffect} from 'react';
import './LaunchingSoon.css'; 
import dentstacklogoblack from './dentstackpnglogoblack.png'; 

export default function LaunchingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const toastTimer = React.useRef(null);
  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);


// Open Modal
const openModal = () => {
  setIsModalOpen(true);
};

// Close Modal
const closeModal = () => {
  if (!isSubmitting) {
    setIsModalOpen(false);
  }
};

// Show Toast Notification
const showToastMessage = (message, type = 'success') => {
  if (toastTimer.current) {
    clearTimeout(toastTimer.current);
  }

  setToast({
    show: true,
    fadeOut: false,
    message,
    type,
  });

  toastTimer.current = setTimeout(() => {
    setToast((prev) => ({
      ...prev,
      fadeOut: true,
    }));

    toastTimer.current = setTimeout(() => {
      setToast({
        show: false,
        fadeOut: false,
        message: '',
        type: 'success',
      });
    }, 700);

  }, 5000);
};


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);
  formData.append("access_key", "636216a1-7da7-40a9-8783-52b6f42cbb98");
  formData.append("subject", "New Demo Request for Dentstack");
  formData.append("from_name", "Stacksys Website");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log("Form submission response:", data);

    if (response.ok && data.success) {
      showToastMessage("Thank you! Your demo request has been submitted.", "success");

      setIsModalOpen(false);
    } else {
      showToastMessage(data.message || "Something went wrong. Please try again.", "error");
    }
  } catch (error) {
    console.error("Submission error:", error);
    showToastMessage("Unable to submit your request. Please try again.", "error");
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
                <label htmlFor="modal-phone">Clinic Name</label>
                <input 
                  type="text" 
                  id="modal-phone" 
                  name="clinic_name"
                  required 
                  disabled={isSubmitting}
                  placeholder="Clinic Name" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="modal-phone" 
                  name="phone"
                  required 
                  disabled={isSubmitting}
                  placeholder="123-456-7890" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-email">Email Address</label>
                <input 
                  type="email" 
                  id="modal-email" 
                  name="email"
                  required 
                  disabled={isSubmitting}
                  placeholder="name@company.com" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-message">Notes / Requirements</label>
                <textarea 
                  id="modal-message" 
                  name="message"
                  rows="4" 
                  disabled={isSubmitting}
                  placeholder="Tell us about your clinic layout or specific needs..."
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Request for Demo"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
{toast.show && (
  <div
    className={`toast-message ${toast.type} ${
      toast.fadeOut ? 'fade-out' : 'show'
    }`}
    role="status"
    aria-live="polite"
  >
    <span className="toast-icon">
      {toast.type === 'success' ? '✓' : '✕'}
    </span>
    <span>{toast.message}</span>
  </div>
)}
    </div>
  );
}
