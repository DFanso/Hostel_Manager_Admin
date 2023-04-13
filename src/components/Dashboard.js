import React from 'react';
import './Dashboard.css';
import UserSearch from './UserSearch';
import RoomManagement from './RoomManagement';
import PaymentHistory from './PaymentHistory'; // import the PaymentHistory component
import AttendanceHistory from './AttendanceHistory'; // import the AttendanceHistory component

const Dashboard = ({ selectedItem }) => {
    const summaryItems = [
        { title: 'Total Registered Students:', value: 100 },
        { title: 'Total Vacant Rooms:', value: 50 },
        { title: 'Total Occupied Rooms:', value: 50 },
        { title: 'Latest Payment History:', value: 'No payments made yet' },
        { title: 'Latest Attendance History:', value: 'No attendance recorded yet' },
        { title: 'Room Allocation Status:', value: 'All rooms allocated' },
    ];

    return (
        <section className="dashboard">
            <h1>{selectedItem === 'dashboard' ? 'Hostel Management Admin Dashboard' : ''}</h1>
            {selectedItem === 'dashboard' && (
                <div className="dashboard-summary">
                    {summaryItems.map((item, index) => (
                        <div key={index} className="summary-item">
                            <h2>{item.title}</h2>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            )}
            {selectedItem === 'user-search' && (
                <div className="user-search-placeholder">
                    <UserSearch />
                </div>
            )}
            {selectedItem === 'room-management' && (
                <div className="room-management-placeholder">
                    <RoomManagement />
                </div>
            )}
            {selectedItem === 'payment-history' && (
                <div className="payment-history-placeholder">
                    <PaymentHistory />
                </div>
            )}
            {selectedItem === 'attendance-history' && (
                <div className="attendance-history-placeholder">
                    <AttendanceHistory />
                </div>
            )}
        </section>
    );
};

export default Dashboard;
