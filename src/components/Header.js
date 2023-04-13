import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h2 className="title">Hostel Management System</h2>
                <img src="logo.png" alt="Hostel Logo" className="logo" />
            </div>
        </header>
    );
};

export default Header;
