import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Container, Card, Row, Col, CardDeck, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import TicTacToe_Img from './images/TicTacToe.png';
import Project_Saigon_IMG from './images/Project_Saigon_IMG.png'
import TicTacToe from './TicTacToe'

class App extends Component {
  render() {
    const linkStyle = {color: 'inherit', textDecoration: 'none'};
    return (
      <HashRouter basename="/">
        <div>
          <Navbar fixed="top" bg="white" variant="light" className="justify-content-center">
            <Nav >
              <Nav.Link href="https://kvo189.github.io/">HOME</Nav.Link>
              <Nav.Link><Link style={linkStyle} to="/">PROJECTS</Link></Nav.Link>
              <Nav.Link><Link style={linkStyle} to="/Contact">CONTACT</Link></Nav.Link>
            </Nav>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="page">
        <Container className="p-3 bg-white">
          <h2>Projects Showcase</h2>
          <medium  className="text-muted">Click on image to view project</medium>
          <hr></hr>

          <Row xs={1} md={2} lg={3}>
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
const Contact = () => <div className="page"><h2>Contact (TODO)</h2></div>

export default App;