import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Button,
  Navbar,
  Nav, Container, Row, Col
} from 'react-bootstrap';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand="lg">
          {/* Add logo here */}
          <Navbar.Brand href="#home">HeyDoc</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Left Menu */}
            <Nav className="mr-auto">

            </Nav>

            {/* Right Menu */}
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main>
        {/* Start different sections here */}
        <Home />
      </main>

      <footer>
        <Container>
          <Row>
            <Col xs lg="2" className="f-start">
              © {new Date().getFullYear()},
              {` `}
              HeyDoc
            </Col>
            <Col className="f-mid">
              <Row>
                <Col md="auto">Contact</Col>
                <Col md="auto">Help</Col>
              </Row>
            </Col>
            <Col xs lg="2" className="f-end" >Some Info</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
