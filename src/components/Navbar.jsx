import React from 'react';
import './Navbar.css';
import logo from './aset design/logo.svg';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    {/* logo, Home, Abaut, FAQ, Login */}
                    <img src={logo} alt="logo" className='logo'/>
                        <div className='menu-list'>
                            <span className='menu-list-item'>HOME</span>
                            <span className='menu-list-item'>About</span>
                            <span className='menu-list-item'>FAQ</span>
                            <button className='login'>Log In</button>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
