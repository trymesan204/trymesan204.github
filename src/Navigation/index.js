import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Blog from '../Blog';
import Projects from '../Projects';
import { Navbar } from 'react-bootstrap';


export default class Navigation extends React.Component {

  componentDidMount(){
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll(){
    const distanceY = document.body.scrollTop || document.documentElement.scrollTop;
    const shrinkOn = 100;
    const navBar = document.getElementById("sticky-navbar");
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
        <BrowserRouter>
          <div id='sticky-navbar' className='sticky-navbar'>
            <div className='navbar'>
              <Navbar.Brand href="/"><b>Sandesh Upadhyaya</b></Navbar.Brand>
              <Nav className="space">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/projects">Projects</NavLink>
              </Nav>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>

    );
  }
}