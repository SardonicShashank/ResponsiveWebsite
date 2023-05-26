import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div id="frame278">
        <span id="refer1">Referral Earning</span>
        <span id="refermon1">₹ 2,500</span>
      </div>
      <div id="frame279">
        <span id="refer2">Total Referrals</span>
        <span id="refermon2">7</span>
      </div>
      <div id="frame280">
        <span id="refer3">Wallet Balance</span>
        <span id="refermon3">₹ 500</span>
      </div>
      <button id="withbtn">
        <span id="withdraw">Withdraw Balance</span>
      </button>
    </div>
  );
};

export default Dashboard;