import React, { useState } from 'react';


function RoomManagement() {
    const [roomNumber, setRoomNumber] = useState('');
    const [studentId, setStudentId] = useState('');
    const [roomId, setRoomId] = useState('');
    const [updateStudentId, setUpdateStudentId] = useState('');

    const handleAddRoom = () => {
        // handle adding a new room
        console.log('Adding room', roomNumber, studentId);
    };

    const handleUpdateRoom = () => {
        // handle updating an existing room
        console.log('Updating room', roomId, updateStudentId);
    };

    return (
        <div className="room-management">
            <div className="add-room-container">
                <h2>Add Room</h2>
                <label style={{ paddingRight: '15px' }} htmlFor="room-number">Room Number</label>
                <input id="room-number" type="text" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} />
                <label style={{ paddingRight: '15px' }} htmlFor="student-id">Student ID</label>
                <input id="student-id" type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                <button style={{ backgroundColor: '#270075', border: 'none', borderRadius: '3px', color: '#fff', cursor: 'pointer', marginBottom: '170px', marginTop: '20px', padding: '10px', width: '10%' }} onClick={handleAddRoom}>
                    Add
                </button>
            </div>
            <div className="update-room-container">
                <h2>Update Room</h2>
                <label style={{ paddingRight: '15px' }} htmlFor="room-id">Room ID</label>
                <input id="room-id" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                <label style={{ paddingRight: '15px' }} htmlFor="update-student-id">Student ID</label>
                <input id="update-student-id" type="text" value={updateStudentId} onChange={(e) => setUpdateStudentId(e.target.value)} />
                <button style={{ backgroundColor: '#270075', border: 'none', borderRadius: '3px', color: '#fff', cursor: 'pointer', marginBottom: '170px', marginTop: '20px', padding: '10px', width: '10%' }} onClick={handleUpdateRoom}>
                    Update
                </button>
            </div>
        </div>
    );
}

export default RoomManagement;
