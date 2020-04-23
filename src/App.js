import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Container, Card, Row, Col, CardDeck, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import TicTacToe_Img from './images/TicTacToe.png';
import TicTacToe from './TicTacToe'

class App extends Component {
  render() {
    const linkStyle = {color: 'inherit', textDecoration: 'none'};
    return (
      <HashRouter basename="/">
        <div>
          <Navbar fixed="top" bg="white" variant="light" className="justify-content-center">
            <Nav >
              <Nav.Link href="https://kvo189.github.io/">Home</Nav.Link>
              <Nav.Link><Link style={linkStyle} to="/">Projects</Link></Nav.Link>
              <Nav.Link><Link style={linkStyle} to="/Contact">Contact</Link></Nav.Link>
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

          <Row xs={1} md={2} lg={4}>
            <Col className="mb-4">
              <Card >
                <Card.Body>
                <Link to="/tic-tac-toe"><Card.Img variant="top" src={TicTacToe_Img} /></Link>
                  <Card.Title>Tic-Tac-Toe</Card.Title>
                  <small className="text-muted">Created on April 23 2020</small>
                  <Card.Text>A simple tic-tac-toe game.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card >
                <Card.Body>
                <Link to="/tic-tac-toe"><Card.Img variant="top" src={TicTacToe_Img} /></Link>
                  <Card.Title>Tic-Tac-Toe</Card.Title>
                  <small className="text-muted">Created on April 23 2020</small>
                  <Card.Text>A simple tic-tac-toe game.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card >
                <Card.Body>
                <Link to="/tic-tac-toe"><Card.Img variant="top" src={TicTacToe_Img} /></Link>
                  <Card.Title>Tic-Tac-Toe</Card.Title>
                  <small className="text-muted">Created on April 23 2020</small>
                  <Card.Text>A simple tic-tac-toe game.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
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