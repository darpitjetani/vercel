import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Digital Business Plan.  
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-md-right">
            <h5>Contact Us</h5>
            <p>
            461, Opp. Sangna 1 Row House, Shyamdham Chowk, Nana Varachha Surat
            </p>
            <b> <p>Mo : +91 96243 88392</p></b>
            
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
