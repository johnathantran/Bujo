import React from 'react';
import { Link } from 'react-router-dom';

// this is a function based component, not class
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Bujo Online</h1>
            <h2>Weekly Spread</h2>
            <Link style={linkStyle} to="/">Home</Link> |
            <Link style={linkStyle} to="/about">About</Link> |
            <Link style={linkStyle} to="/sunday">Sunday</Link> |
            <Link style={linkStyle} to="/monday">Monday</Link> |
            <Link style={linkStyle} to="/tuesday">Tuesday</Link> |
            <Link style={linkStyle} to="/wednesday">Wednesday</Link> |
            <Link style={linkStyle} to="/thursday">Thursday</Link> |
            <Link style={linkStyle} to="/friday">Friday</Link> |
            <Link style={linkStyle} to="/saturday">Saturday</Link>
            
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;