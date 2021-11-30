import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component{

  render(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Link className="nav-link" to="/"><Navbar.Brand>Covid-19</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">India</Link>
                        <Link className="nav-link" to="/World">World</Link>        
                    </Nav>
                </Navbar.Collapse>                
            </Navbar>
        </div>
    )
  }
}
export default Header;
