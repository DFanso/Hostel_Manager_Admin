import React, { useState } from "react";
import "./PaymentHistory.css";

function PaymentHistory(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("dxdfa");
  };

  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <form className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={handleSearch} className="search-button">
          Search
        </button>
      </form>
      {/* render payment history table */}
    </div>
  );
}

export default PaymentHistory;
