import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaTwitch } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer text-light py-3">
      <Container fluid>
        <Row className="justify-content-end">
          <Col xs={2} md={1} className="foot-menu text-end mb-3 mb-md-0">
            <a href="/" className="text-menu text-uppercase text-decoration-none text-light">Main</a>
          </Col>
          <Col xs={2} md={1} className="foot-menu text-end mb-3 mb-md-0">
            <a href="/" className="text-menu text-uppercase text-decoration-none text-light">About</a>
          </Col>
          <Col xs={2} md={1} className="foot-menu text-end mb-3 mb-md-0">
            <a href="/" className="text-menu text-uppercase text-decoration-none text-light">Game Feature</a>
          </Col>
          <Col xs={2} md={1} className="foot-menu text-end mb-3 mb-md-0">
            <a href="/" className="text-menu text-uppercase text-decoration-none text-light">System Requirement</a>
          </Col>
          <Col xs={2} md={1} className="foot-menu text-end mb-3 mb-md-0">
            <a href="/" className="text-menu text-uppercase text-decoration-none text-light">Quotes</a>
          </Col>
          <Col xs={4} md={1} className="foot-icon d-flex justify-content-end">
            <a href="https://www.facebook.com"><FaFacebookF size={20} className="ico-fb mx-4" /></a>
            <a href="https://www.twitter.com"><FaTwitter size={20} className="ico-tt mx-4" /></a>
            <a href="https://www.youtube.com"><FaYoutube size={20} className="ico-yt mx-4" /></a>
            <a href="https://www.twitch.com"><FaTwitch size={20} className="ico-tw mx-4" /></a>
          </Col>
        </Row>
        <hr className="my-4 border-light" />
        <Row>
          <Col md={6} className="text-start text-muted">
            <p className="mb-0">&copy; 2018 Your Games, Inc. All Rights Reserved</p>
          </Col>
          <Col md={6} className="text-end">
            <p className="text-uppercase d-inline-block me-2"><a href="/" className="text-menu text-decoration-none text-light">Privacy Policy</a></p>
            <span className="text-light">|</span>
            <p className="text-uppercase d-inline-block ms-2 me-2"><a href="/" className="text-menu text-decoration-none text-light">Term of Service</a></p>
            <span className="text-light">|</span>
            <p className="text-uppercase d-inline-block ms-2"><a href="/" className="text-menu text-decoration-none text-light">Code of Conduct</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
