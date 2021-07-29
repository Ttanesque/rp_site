const React = require('react');

import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <img alt="logo" className="logo" src="/image/logo.png"/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <span className="border"></span>
                        <li><Link to="/player">Player</Link></li>
                        <span className="border"></span>
                        <li><Link to="/actualite">Actualité</Link></li>
                        <span className="border"></span>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}