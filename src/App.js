import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Link} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import {Container, Card, Row, Col, Navbar} from 'react-bootstrap';
import TicTacToe_Img from './images/TicTacToe.png';
import NotesApp_Img from './images/NotesApp.png';
import Project_Saigon_IMG from './images/Project_Saigon_IMG.png';
import CalculatorApp_Img from './images/CalculatorApp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <ScrollToTop>
        <div className="mt-3">
          <Row className="justify-content-center navbar--show">
          <h1 className="page-header-text text-secondary">Khang Vo</h1>
          </Row>
          <Route render={(props) => {
                  return (
                    <MyNavBar location = {props.location}/>
                  )
                }} />

          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

class MyNavBar extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="white" variant="light">
        <Col>
          <Row className="justify-content-center">
            <ul className="nav navbar-links align-content-center">
              <li className={"navbar-link" + (this.props.location.pathname === "/" ? " navbar-link-active-1" : "")} >
                <Link to="/">ABOUT</Link>
              </li>
              <li className={"navbar-link" + (this.props.location.pathname !== "/" && this.props.location.pathname !== "/contact"? " navbar-link-active-2" : "")} >
                <Link to="/projects">PROJECTS</Link>
                </li>
              <li className={"navbar-link" + (this.props.location.pathname === "/contact" ? " navbar-link-active-3" : "")} >
                <Link to="/contact">CONTACT</Link>
              </li>                
              <hr className="navbar-border"/> 
            </ul>
          </Row>
        </Col>
      </Navbar>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <Container className="p-3 fadeIn">
          <Row xs={1} md={2} xl={3}>
            <ProjectCard link="https://kvo189.github.io/calculator/"
              imgSrc={CalculatorApp_Img} 
              cardTitle='Calculator App'
              date = 'July 6 2020'
              description = 'A calculator app made with React utilizing formula/expression logic'
            />
            <ProjectCard link='https://kvo189.github.io/notes-app/' 
              imgSrc={NotesApp_Img} 
              cardTitle='Markdown Notes Taking App'
              date = 'July 3 2020'
              description = 'Create and store your notes in markdown format for a later purpose!'
            />
            <ProjectCard link="https://kvo189.github.io/tic-tac-toe/"
              imgSrc={TicTacToe_Img} 
              cardTitle='Tic-Tac-Toe'
              date = 'April 23 2020'
              description = 'A simple Tic-Tac-Toe game made with React'
            />
            <ProjectCard link="http://www.saigonnoodlehouse280.com"
              imgSrc={Project_Saigon_IMG} 
              cardTitle='Saigonnoodlehouse280.com'
              date = 'May 2018'
              description = 'Responsive web design with HTML/CSS/JS'  
            />
          </Row>
        </Container>
      </div>
    );
  }
}

class ProjectCard extends Component {
  render() {
    const link = this.props.link,
      imgSrc = this.props.imgSrc,
      cardTitle = this.props.cardTitle,
      date = this.props.date,
      description = this.props.description;

    return (
      <Col>
        <Card>
          <Card.Body className="card-effect">
          <a href={link}><Card.Img variant="top" src={imgSrc} /></a>
            <Card.Title>{cardTitle}</Card.Title>
            <small className="text-muted">created on {date}</small>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <div id="welcome-msg-box" className="custom-shadow fadeIn animate">
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
            <p>I’m a self taught front end <span className="text-highlight">web developer</span> from Birmingham, AL.</p>
          </div>
        </div>
      </div>
    )
  }
}

const Contact = () => <div className="page"><h2>Contact (TODO)</h2></div>

export default App;