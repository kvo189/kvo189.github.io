import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Container, Card, CardDeck, Nav, Navbar} from 'react-bootstrap';
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
          <CardDeck>
            <Card>
              <Card.Body>
              <Link to="/tic-tac-toe"><Card.Img variant="top" src={TicTacToe_Img} /></Link>
                <Card.Title>Tic-Tac-Toe</Card.Title>
                <small className="text-muted">A simple tic-tac-toe game</small>
              {/* <Link to="/tic-tac-toe">
                <Button variant="primary">Go somewhere</Button>
              </Link> */}
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}
const Contact = () => <div className="page"><h2>Contact (TODO)</h2></div>

export default App;