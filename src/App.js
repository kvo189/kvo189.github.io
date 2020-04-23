import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Container, Card, Row, Col, Button, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import TicTacToe_Img from './images/TicTacToe.png';
import Project_Saigon_IMG from './images/Project_Saigon_IMG.png';
import TicTacToe from './TicTacToe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    const linkStyle = {color: 'inherit', textDecoration: 'none'};
    return (
      <HashRouter basename="/">
        <div>
          <Navbar fixed="top" bg="white" variant="light">
            <Col>
              <Row className="justify-content-center">
                <h1 className="page-header-text text-secondary">Khang Vo</h1>
              </Row>
              <Row className="justify-content-center">
                <Nav >
                  <Nav.Link className="px-4 nav-btn">
                    <Link style={linkStyle} to="/">
                      ABOUT
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="px-4 nav-btn" >
                    <Link style={linkStyle} to="/projects">
                      PROJECTS
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="px-4 nav-btn" >
                    <Link style={linkStyle} to="/contact"
                      >CONTACT
                    </Link>
                  </Nav.Link>
                </Nav>
              </Row>
            </Col>
          </Navbar>

          <Route exact path="/" component={About} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </div>
      </HashRouter>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="page bg-light">
        <Container className="p-3 bg-light">
          <Row xs={1} md={2} xl={2}>
            <Col>
              <Card>
                <Card.Body>
                <Link to="/tic-tac-toe"><Card.Img className="shadow-sm zoom" variant="top" src={TicTacToe_Img} /></Link>
                  <Card.Title>Tic-Tac-Toe</Card.Title>
                  <small className="text-muted">created on April 23 2020</small>
                  <Card.Text>Simple Tic-Tac-Toe Game with React</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Body>
                  <a href="http://www.saigonnoodlehouse280.com"><Card.Img className="shadow-sm zoom" variant="top" src={Project_Saigon_IMG} /></a>
                  <Card.Title>Saigonnoodlehouse280.com</Card.Title>
                  <small className="text-muted">created on May 2018</small>
                  <Card.Text>
                    Responsive Web Design with HTML/CSS/JS
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Body>
                <Link to="/tic-tac-toe"><Card.Img variant="top" src={TicTacToe_Img} /></Link>
                  <Card.Title>Tic-Tac-Toe</Card.Title>
                  <small className="text-muted">Created on April 23 2020</small>
                  <Card.Text>A simple tic-tac-toe game.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Body>
                <Link to="/tic-tac-toe"><Card.Img variant="top" src={TicTacToe_Img} /></Link>
                  <Card.Title>Tic-Tac-Toe</Card.Title>
                  <small className="text-muted">Created on April 23 2020</small>
                  <Card.Text>A simple tic-tac-toe game.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <div id="welcome-msg-box" className="custom-shadow">
          <div id="welcome-msg-box-header" className="d-flex justify-content-between">
            <div className="d-flex align-items-center pl-4">
              <i className="arrow arrow-left"></i>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-end m-0">
              <img src="http://res.cloudinary.com/dpealgfbi/image/upload/v1529722421/profile-img.jpg" className="img-fluid rounded-circle"/>
              <span style={{fontSize: "1rem"}}>Khang</span>
            </div>
            <div className="d-flex align-items-center pr-3">
              <FontAwesomeIcon className="fa-lg" icon={faInfoCircle} style={{color: "rgb(66, 134, 244)"}}></FontAwesomeIcon>
            </div>
          </div>

          <div className="from-them">
            <h1>Hello! My name is <span className="text-highlight">Khang Vo</span></h1>
          </div>
          <div className="from-them">
            <p>I’m a self taught front end <span className="text-highlight">web developer</span> living in Birmingham, AL.</p>
          </div>
        </div>
      </div>
    )
  }
}

const Contact = () => <div className="page"><h2>Contact (TODO)</h2></div>

export default App;