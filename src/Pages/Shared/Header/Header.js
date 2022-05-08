import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Shoe <span className='text-danger'>Hub</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <Nav.Link as={Link} to='/manageproducts'>Manage Products</Nav.Link>
                                        <Nav.Link as={Link} to='/myproducts'>My Products</Nav.Link>
                                        <Nav.Link as={Link} to='/addproducts'>Add Products</Nav.Link>
                                    </>
                                    :
                                    ""
                            }

                        </Nav>
                        <Nav>
                            {
                                user?.uid
                                    ?
                                    <button onClick={() => handleSignout()}>Sign Out</button>
                                    :
                                    <>
                                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                        <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;