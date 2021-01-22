import React from 'react';
//import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// this is a function based component, not class
function Header() {
    return (
        <div>
        {/*
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
        */}
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Bujo Weekly</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/sunday">Sunday</Nav.Link>
                <Nav.Link href="/monday">Monday</Nav.Link>
                <Nav.Link href="/tuesday">Tuesday</Nav.Link>
                <Nav.Link href="/wednesday">Wednesday</Nav.Link>
                <Nav.Link href="/thursday">Thursday</Nav.Link>
                <Nav.Link href="/friday">Friday</Nav.Link>
                <Nav.Link href="/saturday">Saturday</Nav.Link>
            </Nav>
        </Navbar>
        <p>welcome to bujo weekly, your online bullet journal for weekly spreads.</p>

        </div>
    )
}
/*
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
*/
export default Header;