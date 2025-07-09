import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          background-color: #000000;
          color: #ffffff;
          padding: 4rem 2rem 2rem;
          font-family: 'Inter', sans-serif;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .footer-section h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .footer-section p,
        .footer-section a {
          color: #bbbbbb;
          font-size: 0.95rem;
          line-height: 1.6;
          text-decoration: none;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 0.6rem;
        }

        .footer-section a:hover {
          color: #ffffff;
          transition: color 0.3s ease-in-out;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-icons a {
          color: #bbbbbb;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }

        .social-icons a:hover {
          color: #ffffff;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #bbbbbb;
          font-size: 0.95rem;
        }

        .subscribe-form {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .subscribe-form input {
          flex: 1 1 60%;
          padding: 0.6rem 1rem;
          border: none;
          border-radius: 4px;
          font-size: 0.9rem;
        }

        .subscribe-form button {
          flex: 1 1 35%;
          padding: 0.6rem 1rem;
          background-color: #ffffff;
          color: #000;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .subscribe-form button:hover {
          background-color: #dddddd;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #333;
        }

        .footer-bottom p {
          color: #777777;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .contact-info {
            align-items: center;
          }

          .social-icons {
            justify-content: center;
          }

          .subscribe-form {
            flex-direction: column;
            align-items: center;
          }

          .subscribe-form input,
          .subscribe-form button {
            width: 100%;
          }
        }
      `}</style>

      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">ZesterTech</div>
          <p>Empowering businesses with cutting-edge technology solutions.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope /> <a href="mailto:info@zester.tech">support@zestertech.com</a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt /> <a href="tel:+1234567890">+1 234 567 890</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt /> <span>123 Tech Street, Innovation City</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Join our newsletter to stay updated.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ZesterTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
