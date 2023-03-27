import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

import rockImg from '../assets/gesture_batu.png';
import paperImg from '../assets/gesture_kertas.png';
import scissorImg from '../assets/gesture_gunting.png';
import resetImg from '../assets/refresh.png';
import logoImg from '../assets/logo.png';
import playerWin from '../assets/player1win.png';
import comWin from '../assets/comwin.png';
import draw from '../assets/draw.png';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerChoice: '',
      computerChoice: '',
      winner: ''
    };
  }

  choices = ['rock', 'paper', 'scissors'];

  playGame = (playerChoice) => {
    const computerChoice = this.choices[Math.floor(Math.random() * 3)];
    const winner = this.calculateWinner(playerChoice, computerChoice);

    this.setState({
      playerChoice,
      computerChoice,
      winner
    });
  }

  calculateWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return 'Tie';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'Player';
    } else {
      return 'Computer';
    }
  }

  resetGame = () => {
    this.setState({
      playerChoice: '',
      computerChoice: '',
      winner: ''
    });
  }

  render() {
    const { playerChoice, computerChoice, winner } = this.state;
    let vsText = <h1 className="vs-text h-100 align-items-center">VS</h1>;
    let resultImg = null;
    if (winner === 'Player') {
      resultImg = <Image className="result-img" src={playerWin} />;
    } else if (winner === 'Computer') {
      resultImg = <Image className="result-img" src={comWin} />;
    } else if (winner === 'Tie') {
      resultImg = <Image className="result-img" src={draw} />;
    }

    return (
      <div className='gamePage'>
        <Container fluid>
          <Row className="header-row py-3">
            <Col xs={1}><Image className="back-arrow" src={require('../assets/back-arrow.png').default} /></Col>
            <Col xs={1}><Image className="logo-img" src={logoImg} /></Col>
            <Col xs={9}><h1 className="header-text">ROCK PAPER SCISSOR</h1></Col>
          </Row>
          <Row>
            <Col xs={4} className="text-end">
              <h3 className="player-text">Player 1</h3>
              <div className={`gesture-container ${playerChoice === 'rock' ? 'active' : ''}`} onClick={() => this.playGame('rock')}>
                <Image className="gesture-img" src={rockImg} />
              </div>
              <div className={`gesture-container ${playerChoice === 'paper' ? 'active' : ''}`} onClick={() => this.playGame('paper')}>
                <Image className="gesture-img" src={paperImg} />
              </div>
              <div className={`gesture-container ${playerChoice === 'scissors' ? 'active' : ''}`} onClick={() => this.playGame('scissors')}>
                <Image className="gesture-img" src={scissorImg} />
              </div>
            </Col>
            <Col xs={4} className="text-center result-col align-middle">
              {vsText}
              {resultImg}
            </Col>
            <Col xs={4}>
              <h3 className="computer-text">COM</h3>
              <div className={`gesture-container-com ${computerChoice === 'rock' ? 'active' : ''}`}>
                <Image className="gesture-img" src={rockImg} />
              </div>
              <div className={`gesture-container-com ${computerChoice === 'paper' ? 'active' : ''}`}>
                <Image className="gesture-img" src={paperImg} />
              </div>
              <div className={`gesture-container-com ${computerChoice === 'scissors' ? 'active' : ''}`}>
                <Image className="gesture-img" src={scissorImg} />
              </div>
            </Col>
          </Row>
          <Row className='text-center'>
          <div className="reset-container mt-n5">
            <Image className="reset-img" src={resetImg} onClick={this.resetGame} />
          </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GamePage;
