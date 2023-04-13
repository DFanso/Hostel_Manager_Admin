import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar onItemClick={handleItemClick} />
        <Dashboard selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default App;
