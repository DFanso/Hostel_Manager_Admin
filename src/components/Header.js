import React from 'react';
import './Header.css';

const Header = () => {

    const handleLogin = () => {
        const loginWindow = window.open('/userloginForm.html', 'Login Popup', 'width=400,height=550');
        loginWindow.addEventListener('unload', () => {
            if (window.opener && !window.opener.closed) {
                window.opener.location.reload(); // Reload the parent window after closing the popup
            }
        });
    }

    return (
        <header className="header">
            <div className="header-container">
                <h2 className="title">Hostel Management System</h2>
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
        </header>
    );
};

export default Header;
