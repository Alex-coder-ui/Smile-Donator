
import React, {Component} from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link,  Switch, BrowserRouter } from "react-router-dom"
import './css/style.css'





export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top" />
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#"><Link to ="/">Simle Donator</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to ="Contacts" >Contacts</Link>
                            <Link to ="Donate" >Donate</Link>
                            <NavDropdown title="Click me!" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#"><Link to ="/Calendar">Calendar</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#"><Link to ="/Calendar">Registration form</Link></NavDropdown.Item>
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