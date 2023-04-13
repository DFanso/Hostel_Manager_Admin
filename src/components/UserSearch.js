import React, { useState } from 'react';
import './UserSearch.css';

const UserSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // TODO: Implement search functionality
        console.log(`Searching for students with name or ID containing: ${searchTerm}`);
    };

    return (
        <div className="user-search">
            <h2>Search Students</h2>
            <div className="search-bar">
                <input type="text" placeholder="Enter student name or ID" value={searchTerm} onChange={handleInputChange} />
                <button onClick={handleSearch}>Search</button>
            </div>
            {/* Add search results here */}
        </div>
    );
};

export default UserSearch;
