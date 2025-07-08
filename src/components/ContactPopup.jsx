import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPhoneAlt,
  faEnvelope,
  faEdit,
  faTimes,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import './ContactPopup.css';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Close the form popup
    setIsOpen(false);

    // Show success message
    setShowSuccess(true);

    // Clear form fields
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });

    // Hide success after 1.5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="popup-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.button
                className="close-btn"
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 180, scale: 1.2 }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </motion.button>

              <h2 className="popup-title">Your Requirement</h2>

              <form className="popup-form" onSubmit={handleSubmit}>
                {[
                  { name: 'name', type: 'text', placeholder: 'Name', icon: faUser },
                  { name: 'phone', type: 'tel', placeholder: 'Phone', icon: faPhoneAlt },
                  { name: 'email', type: 'email', placeholder: 'Email', icon: faEnvelope }
                ].map((field, i) => (
                  <div className="popup-field" key={i}>
                    <FontAwesomeIcon icon={field.icon} className="popup-icon" />
                    <input
                      name={field.name}
                      type={field.type}
                      required
                      placeholder=" "
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                    <label>{field.placeholder}</label>
                  </div>
                ))}
                <div className="popup-field">
                  <FontAwesomeIcon icon={faEdit} className="popup-icon" />
                  <textarea
                    name="message"
                    required
                    placeholder=" "
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label>Message</label>
                </div>

                <motion.button
                  type="submit"
                  className="popup-submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="global-success-message"
            style={{
              position: 'fixed',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999
            }}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <div className="success-text">
              <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
              <p>Your requirement has been submitted successfully!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactPopup;
