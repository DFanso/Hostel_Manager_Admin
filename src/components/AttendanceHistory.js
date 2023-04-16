import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendanceHistory.css";

function AttendanceHistory(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAttendanceRecords = async (studentId, dataCount) => {
    try {
      console.log(studentId, dataCount);
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1MDJjMzY5MjI4MTk0MDE2NjY2MmQiLCJpYXQiOjE2ODE2MzIyNjksImV4cCI6MTY4MTYzNTg2OX0.1Iwx_L8yhjH4bE-XT_VZ7t-sV781YhzQTmhvHvYzn-s";
      const response = await axios.get(
        `http://localhost:3000/api/students/${searchTerm}?dataCount=${dataCount}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAttendanceRecords(response.data.attendanceRecords);
    } catch (error) {
      console.error("Error fetching attendance records:", error);
    }
  };

  useEffect(() => {
    fetchAttendanceRecords(props.studentId, currentPage);
  }, [searchTerm, currentPage]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Add any additional search functionality here
  };

  return (
    <div className="attendance-history">
      <h2>Attendance History</h2>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" style={{ backgroundColor: "#1e90ff" }}>
          Search
        </button>
      </form>
      {/* render attendance history table */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record._id}>
              <td>{new Date(record.timestamp).toLocaleDateString()}</td>
              <td>{record.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
