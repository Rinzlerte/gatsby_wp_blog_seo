// import React from 'react';
// export default (props)=> {
//     return (
//         <div style={{width: `100%`, height: `80px`, backgroundColor:`green`}}>
//             <h1>{props.title}</h1>
//         </div>
//     );
// }

import React from 'react';
// import HeaderStles from './Header.module.css';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;