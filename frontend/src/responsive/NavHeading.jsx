import '../App.css'
import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
const NavHeading = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={ faRoute } /> Mikhmonify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className="me-auto">
                        <Nav.Link href='#about'>
                            About
                        </Nav.Link>
                        <Nav.Link href='#IOT'>
                            IOT 
                        </Nav.Link>
                        <Nav.Link href='#faqs'>
                            FAQ'S
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="text-primary" href='/login' >
                            Log In
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavHeading;