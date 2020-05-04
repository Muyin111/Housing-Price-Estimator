import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
               <Link style={linkStyle} to="/"> Home</Link> | <Link style={linkStyle} to="/about"> About</Link> | 
                <Link style={linkStyle} to="/contact"> Contact</Link> | <Link style={linkStyle} to="/login"> Login</Link> |
                <Link style={linkStyle} to="/register"> Register</Link>
            </div>
        )
    }
}


const linkStyle = {
    background: 'lightgray',
    color: 'black',
    textecoration: 'none'
}

export default NavBar;