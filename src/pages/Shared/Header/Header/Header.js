import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">Health Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/doctors">Doctor</Nav.Link>
                            <Nav.Link as={HashLink} to="/medicines">Medicine</Nav.Link>
                            <Nav.Link as={HashLink} to="/shop">Shop</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About us</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.email ? <div>
                                    {
                                        user.displayName && <Navbar.Text>
                                            Signed in as: {user.displayName}
                                        </Navbar.Text>
                                    }
                                    <Button variant="outline-warning" onClick={logOut}>
                                        Logout
                                    </Button>
                                </div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;