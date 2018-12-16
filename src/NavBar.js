import React, { Component } from 'react';
import './NavBar.css';

class Navbar extends Component {
    render() {
        return(
            <div className='nav-container'>
                <div className='nav-title'>Recipe App</div>
                <div className='nav-menu'>
                    <div>New Recipe</div>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact Us</div>
                </div>
            </div>
        )
    }
}

export default Navbar;