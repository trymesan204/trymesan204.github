import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar className="navbar" sticky="top" bg="white">
      <Container className="container">
        <Navbar.Brand href="/"><b>Sandesh Upadhyaya</b></Navbar.Brand>
        <Nav className="space">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blogs">Blog</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;