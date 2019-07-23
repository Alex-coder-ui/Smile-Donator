
import React from "react"
import { Navbar, Nav, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" />
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Simle Donator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#Contacts">Contacts</Nav.Link>
                            <Nav.Link href="#Donate">Donate</Nav.Link>
                            <NavDropdown title="Click me!" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#View calendar">View calendar</NavDropdown.Item>
                                <NavDropdown.Item href="#Registration form">Registration form</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://www.google.com/search?q=kitties+images&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSq9rQ-MvjAhWq_CoKHWRPDSYQ_AUIESgB&biw=1600&bih=789#imgrc=9e9KbvJx7Q6h_M:">View kitties images</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}