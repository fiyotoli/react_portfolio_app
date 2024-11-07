import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-10 text-dark mt-5">
      <Container className="py-4 text-center"> {/* Center the text in the container */}
        <Row>
          <Col>
            <h5 className="text-primary">FiyoToli</h5> {/* Replace with your text logo */}
            <p className='fs-5 lead'>Connect with me on social media!</p>
            <div>
              <a href="https://www.facebook.com" className="text-primary me-3" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={25} />
              </a>
              <a href="https://www.twitter.com" className="text-primary me-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={25} />
              </a>
              <a href="https://www.linkedin.com" className="text-primary me-3" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={25} />
              </a>
              <a href="https://www.instagram.com" className="text-primary" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Name.All rights reserved</p> {/* Reserved text at the bottom */}
         
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
