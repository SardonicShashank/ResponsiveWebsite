import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ReferralCode from './components/ReferralCode';
import HowItWorks from './components/HowItWorks';
import FriendsEnrolled from './components/FriendsEnrolled';
import TermsConditions from './components/TermsConditions';

const App = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <Navbar />
      <Dashboard />
      <ReferralCode />
      <HowItWorks />
      <FriendsEnrolled />
      <TermsConditions />
    </div>
  );
};

export default App;
