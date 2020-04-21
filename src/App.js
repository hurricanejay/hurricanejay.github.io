import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './Components/Footer'
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
// import ContactPage from './Pages/ContactPage';

class App extends React.Component {

  state = { 
    title: "Jay Wen", 
    headerLinks: [ 
      {title: "Home", path: '/'},
      {title: "About", path: '/about'}, 
      // {title: "Contact", path: '/contact'} 
    ],  

    home: {
      title: "Hi, I'm Jay!",
      subTitle: "aesthetics & functionality",
      text: "I'm a software engineer with a background in e-commerce website management, photography, marketing, and media production. Below are some of my latest projects..."
    },

    about: {
      title: "About Me",
    },

    // contact: {
    //   title: "Say Hi!",
    // }

  }

  render() {

    return (
      <div className="App">
        <Router>
            <Container className="p-0" fluid={true}>
              <Navbar className="border-bottom" bg="transparent" expand="lg">  
              <Navbar.Brand><Link className="nav-link" to="/">Jay Wen</Link></Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                </Nav>
                </Navbar.Collapse>
              </Navbar>

              <Route path="/" exact render={() => <Homepage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/about" render={() => <AboutPage title={this.state.about.title}/> }/>
              <Footer />
            </Container>

        </Router>
      </div>
    );
  }
}

export default App;
