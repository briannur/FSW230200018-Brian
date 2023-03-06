import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';

import UserCard from './userCard';
import Twitter from '../../assets/twitter-card.png';

import evanLahti from '../../assets/evan-lahti.jpg';
import jadaGriffin from '../../assets/jada-griffin.jpg';
import aaronWilliams from '../../assets/aaron-williams.jpg';

const TopScore = () => {
  const activities = [
    {
      id: 0,
      name: 'Evan Lahti',
      status: 'PC Gamer',
      date: 'June 18, 2021',
      photoUrl: evanLahti,
      post: '"One of my gaming highlights of the year."',
      socialMediaLogo: Twitter
    },
    {
      id: 1,
      name: 'Jada Griffin',
      status: 'Nerdreactor',
      date: 'July 10, 2021',
      photoUrl: jadaGriffin,
      post: '"The next big thing in the world of streaming and survival games."',
      socialMediaLogo: Twitter
    },
    {
      id: 2,
      name: 'Aaron Williams',
      status: 'Uproxx',
      date: 'December 24, 2018',
      photoUrl: aaronWilliams,
      post: "\"Snoop Dogg Playing The Widly Entertaining 'SOS' is Ridiculous.\"",
      socialMediaLogo: Twitter
    }
  ];

  return (
    <div className="game-topscore bg-image">
      <div className='overlay bg-image'>
        <Col className="d-flex flex-row align-items-center h-100">
          <Container className="d-flex container-left">
            <Col md={6}>
              <div className="text-left">
                <h1 className="mb-4 text-white">TOP SCORES</h1>
                <p className="lead mb-4 text-white">
                  This top scores from various games provided on this platform
                </p>
                <Button variant="btn">see more</Button>
              </div>
            </Col>
          </Container>
          <Container className="card-container d-flex">
            <Col md={6}>
              {activities.map((activity, index) => (
                <UserCard className="the-card"
                  key={index}
                  name={activity.name}
                  status={activity.status}
                  date={activity.date}
                  photoUrl={activity.photoUrl}
                  post={activity.post}
                  socialMediaLogo={activity.socialMediaLogo}
                />
              ))}
            </Col>
          </Container>
        </Col>
      </div>
    </div>
  );
};

export default TopScore;