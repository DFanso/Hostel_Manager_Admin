import React, { useState } from 'react';
import './AttendanceHistory.css';

function AttendanceHistory(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        props.onSearch(searchTerm);
    };

    return (
        <div className="attendance-history">
            <h2>Attendance History</h2>
            <form className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" onClick={handleSearch} style={{ backgroundColor: '#1e90ff' }}>
                    Search
                </button>
            </form>
            {/* render attendance history table */}
        </div>
    );
}

export default AttendanceHistory;
