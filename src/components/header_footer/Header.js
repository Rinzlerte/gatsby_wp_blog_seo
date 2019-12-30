import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'gatsby';

const Header = (props) => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">
                        <b className="text-white">Home</b>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                        <b className="text-white">About</b>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contacts">
                        <b className="text-white">Contacts</b>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;


// import React from 'react';
// // import {Navbar, Nav} from "react-bootstrap";
// import {Link} from 'gatsby';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';

// const Header = (props) => {

//     return (
//         <AppBar position="static" style={{display: `flex`}}>
//             <Link edge="start" color="inherit" aria-label="menu" href="/">
//                 <Button variant="contained" color="primary">{props.title}</Button>
//             </Link>
//             <Toolbar 
//                 style={{
//                     display:`flex`,
//                     justifyContent: `flex-end`
//                 }}
//                 >
//                 <Link to="/">
//                     <Button variant="contained" color="primary">HOME</Button>
//                 </Link>
//                 <Link to="/about">
//                     <Button variant="contained" color="primary">ABOUT</Button>
//                 </Link>
//                 <Link to="/contacts">
//                     <Button variant="contained" color="primary">CONTACT</Button>
//                 </Link>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;