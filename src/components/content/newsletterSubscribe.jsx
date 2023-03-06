import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../footer/footer";

const NewsSubs = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <div className="game-news">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md={6} className="d-flex align-items-center">
            <div className="rounded-circle gradient-effect"></div>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="text-container text-left text-white">
              <p className="sub-text">Want to stay in<br /> touch?</p>
              <h1 className="display-4">NEWSLETTER SUBSCRIBE</h1>
              <p className="paragraph-text">In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about games. We don't spam.</p>
              <Form className="mt-5" onSubmit={handleSubmit}>
                <Row className="align-items-center">
                  <Col className="input" md={8}>
                    <span className="fname text-muted">Your email address</span>
                    <Form.Control
                      plaintext
                      className="line-input h-100"
                      type="email"
                      placeholder="youremail@binar.co.id"
                      value={email}
                      onChange={handleInputChange}
                      required
                      onFocus={(e) => e.target.removeAttribute('placeholder')}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.setAttribute('placeholder', 'youremail@binar.co.id');
                        }
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <Button className="btn btn-lg h-100" type="submit">
                      Subscribe now
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsSubs;
