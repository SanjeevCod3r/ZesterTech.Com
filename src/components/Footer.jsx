import React from 'react';
import styled from 'styled-components';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Column>
          <Logo>zester Tech</Logo>
          <Description>
            Transforming digital experiences with cutting-edge technology and creative solutions.
          </Description>
          <SocialLinks>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </SocialLinks>
        </Column>

        <Column>
          <Title>Quick Links</Title>
          <Links>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </Links>
        </Column>

        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <div><FaMapMarkerAlt /><span>123 Tech Street, Silicon Valley, CA</span></div>
            <div><FaPhone /><span>+1 234 567 8900</span></div>
            <div><FaEnvelope /><span>info@zester.com</span></div>
          </ContactInfo>
        </Column>

        <Column>
          <Title>Newsletter</Title>
          <Newsletter>
            <p>Subscribe to our newsletter for latest updates.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </Newsletter>
        </Column>
      </Content>

      <BottomBar>
        <p>&copy; {new Date().getFullYear()} Zester Technologies. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </BottomBar>
    </FooterContainer>
  );
};

// Styled Components

const FooterContainer = styled.footer`
  background: #000;
  color: #eee;
  padding: 80px 0 30px;
  font-family: 'Segoe UI', sans-serif;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  border-bottom: 2px solid #444;
  padding-bottom: 10px;
  width: fit-content;
`;

const Description = styled.p`
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #bbb;
    font-size: 1.3rem;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  border-bottom: 1px solid #444;
  padding-bottom: 5px;
  width: fit-content;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: #bbb;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #bbb;
    font-size: 0.95rem;

    svg {
      color: #fff;
      font-size: 1rem;
    }
  }
`;

const Newsletter = styled.div`
  p {
    color: #bbb;
    font-size: 0.95rem;
  }

  form {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    input {
      flex: 1;
      padding: 10px;
      background: #111;
      color: #fff;
      border: 1px solid #333;
      border-radius: 5px;

      &:focus {
        outline: none;
        border-color: #fff;
      }
    }

    button {
      padding: 10px 18px;
      background: #fff;
      color: #000;
      border: none;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #ddd;
      }
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 60px;
  padding-top: 25px;
  border-top: 1px solid #333;
  text-align: center;
  font-size: 0.85rem;
  color: #999;

  p {
    margin: 5px 0;
  }

  a {
    color: #999;
    text-decoration: none;
    margin: 0 5px;

    &:hover {
      color: #fff;
    }
  }
`;

export default Footer;
