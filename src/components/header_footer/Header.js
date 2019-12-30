import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'gatsby';

const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">
                    <b className="text-dark">Home</b>
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                    <b className="text-dark">About</b>
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts">
                    <b className="text-dark">Contacts</b>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;