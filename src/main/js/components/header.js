const React = require('react');

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar>
                    <Navbar.Brand>
                        <img
                            alt="logo"
                            width="50"
                            height="30"
                            className="d-inline-block align-top"
                            src="/image/logo.png"
                            alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/player">Player</Link></Nav.Link>
                        <Nav.Link><Link to="/actualite">Actualité</Link></Nav.Link>
                        <Nav.Link><Link to="/help">Help</Link></Nav.Link>
                    </Nav>
                </Navbar>
            </header>
        )
    }
}