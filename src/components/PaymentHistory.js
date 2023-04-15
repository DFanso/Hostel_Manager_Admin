import React, { useState } from "react";
import "./PaymentHistory.css";
import axios from "axios";

function PaymentHistory(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentHistory, setPaymentHistory] = useState([]);

  const handleSearch = async (event) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpZHdhZGVzZXJhbTIwMDJAZ21haWwuY29tIiwiaWF0IjoxNjgxNTA2NTE1fQ.IOjpgJiX56k639zLf7yOVqoD21C3oSbshbRxvB0I0iA";
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/api/payments/${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPaymentHistory(response.data.payments);
    } catch (error) {
      console.error("Error fetching payment history:", error.response.data);
    }
  };

  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <table className="payment-history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Payer Type</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr key={index}>
              <td>{new Date(payment.datePaid).toLocaleDateString()}</td>
              <td>{payment.amount}</td>
              <td>{payment.payerType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentHistory;
