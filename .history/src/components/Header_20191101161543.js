import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'gatsby';

const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                    About
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                    <Link to="/contact">Contact US</Link>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;