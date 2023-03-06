import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const UserCard = ({ name, status, date, photoUrl, post, socialMediaLogo }) => {
  return (
    <Card className="card my-3">
      <Row className="g-0">
        <Col xs={3} className="p-3 d-flex align-items-center">
          <img src={photoUrl} alt={name} className="rounded-circle" />
          <div className="overlayed"></div>
        </Col>
        <Col xs={6} className="d-flex align-items-center ms-2">
          <div>
            <h5>{name}</h5>
            <p className="mb-0 text-muted">{status}</p>
          </div>
        </Col>
        <Col xs={3} className="d-flex align-items-center justify-content-end">
          <img className="logo-sm" src={socialMediaLogo} alt="social-media-logo" width="20" height="20" />
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs={12} className="pt-0 pe-3 ps-3">
          <p className='text-white'>{post}</p>
          <div className="mt-0">
            <small className="date text-muted">{date}</small>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;