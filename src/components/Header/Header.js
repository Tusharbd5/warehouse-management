import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const handleToggle = () => {
        const items = document.querySelector('.nav-items');
        items.classList.toggle('open');
    }
    return (
        <nav className='header'>
            <div onClick={() => { window.location.href = '/' }} className='logo'>
                <h3 className='text-white m-0 fw-light fs-4'>X-HOUSE</h3>
                <h1 style={{ color: "orange", fontSize: "25px", margin: "0" }}>MANAGEMENT</h1>
            </div>
            <button onClick={handleToggle} className='nav-toggle'>
                <span></span>
            </button>
            <div className='nav-items'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/home#services">Services</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About Us</CustomLink>
            </div>
        </nav>
    );
};

export default Header;