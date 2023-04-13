import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onItemClick }) => {
    const [selectedItem, setSelectedItem] = useState('dashboard');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        onItemClick(item);
    };

    return (
        <aside className="sidebar">
            <div className="logo-container">
                <img src="https://drive.google.com/uc?id=1CHQOCAJX4UQznKlOJR6kzsOIkXozE-P8" alt="Logo" className="logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li className={selectedItem === 'dashboard' ? 'selected' : ''} onClick={() => handleItemClick('dashboard')}>
                        Dashboard
                    </li>
                    <li className={selectedItem === 'user-search' ? 'selected' : ''} onClick={() => handleItemClick('user-search')}>
                        User Search
                    </li>
                    <li className={selectedItem === 'room-management' ? 'selected' : ''} onClick={() => handleItemClick('room-management')}>
                        Room Management
                    </li>
                    <li className={selectedItem === 'payment-history' ? 'selected' : ''} onClick={() => handleItemClick('payment-history')}>
                        Payment History
                    </li>
                    <li className={selectedItem === 'attendance-history' ? 'selected' : ''} onClick={() => handleItemClick('attendance-history')}>
                        Attendance History
                    </li>

                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
