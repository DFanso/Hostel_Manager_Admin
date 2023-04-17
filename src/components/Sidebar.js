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

            <nav className="nav">
                <ul>
                    <li className={selectedItem === 'dashboard' ? 'selected' : ''} onClick={() => handleItemClick('dashboard')}>
                        Welcome
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
