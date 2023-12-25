import './App.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <ul>
                <li><Link to="/" />Home Page</li>
                <li><Link to="/signup" />Registration</li>
                <li><Link to="/signin" />Login</li>
            </ul>
        </div>
    )
}
export default Nav;