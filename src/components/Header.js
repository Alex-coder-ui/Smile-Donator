import React, {Component} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {NavLink as DLink} from "react-router-dom"
import './css/style.css'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top"/>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <DLink className={"DLink"} to="/">Simle Donator</DLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <DLink className={"DLink"} to="/contacts">Contacts</DLink>
                            <DLink className={"DLink"} to="/donate">Donate me</DLink>

                        </Navbar.Collapse>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}