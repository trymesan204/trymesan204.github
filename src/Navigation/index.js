import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

export default class Navigation extends React.Component {

  componentDidMount(){
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll(){
    const distanceY = document.body.scrollTop || document.documentElement.scrollTop;
    const shrinkOn = 100;
    const navBar = document.getElementById("navbar");
    console.log(distanceY);

    if (distanceY > shrinkOn) {
      navBar.style.height = "60px";
      navBar.style.transition = "0.5s";
    }else{
      navBar.style.height = "150px";
      navBar.style.transition = "0.5s";
    }
  }

  render(){
    return (
      <Navbar id="navbar" className="navbar" sticky="top" bg="white">
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
}