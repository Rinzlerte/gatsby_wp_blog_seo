import React from 'react';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from "react-bootstrap";
import {Link} from 'gatsby';

const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/about/">About US</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact/">Contact US</Link></Nav.Link>
                <Nav.Link>
                    <Link to="/about/">About US</Link>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;