import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserSearch.css";

const UserSearch = () => {
  const [studentId, setstudentId] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setstudentId(event.target.value);
  };
  const handleLogin = async () => {
    // Your login or sign-up logic here
    // After a successful login or sign-up, save the token to the localStorage
    const token = localStorage.getItem("token");
    localStorage.setItem("token", token);
  };

  const handleSearch = async () => {
    try {
      handleLogin();
      console.log(process.env.SERVER_IP);
      console.log(studentId);
      const response = await axios.get(
        `http://localhost:3000/api/students/getStudentDetailsByStudentID/${studentId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("API response:", response.data); // Keep this line to log the API response
      setSearchResults([response.data.student]); // Wrap the student object in an array
    } catch (error) {
      console.error("Error searching for students:", error);
    }
  };

  return (
    <div className="user-search">
      <h2>Search Students</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter student name or ID"
          value={studentId}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {Array.isArray(searchResults) &&
          searchResults.map((student) => (
            <div key={student._id} className="student-details">
              <p>Student ID: {student.studentId}</p>
              <p>Email: {student.email}</p>
              <p>First Name : {student.firstName}</p>
              <p>Last Name : {student.lastName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSearch;
