import React from 'react';
import './HowItWorks.css';
import ecl1 from './img/ecl1.png';
import ecl2 from './img/ecl2.png';
import ecl3 from './img/ecl3.png';
import ecl4 from './img/ecl4.png';
import ecl5 from './img/ecl5.png';
import ellipse from './img/ellipse.png';

const HowItWorks = () => {
  return (
    <div id="howdoesitwork">
      <span id="work">How does it work ?</span>

      <div id="data1">
        <img src={ellipse} alt="ellipse" className="ellipse" id="el1" />
        <img src={ecl1} alt="ecl1" className="ecl1" id="ecl1" />
        <div className="content1" id="content1">
          <span id="datainfo1">Invite your Friends</span>
          <span id="datainfo2">Share the link tutedude.com with your friends</span>
        </div>
      </div>
      <div id="data2">
        <img src={ellipse} alt="ellipse" className="ellipse" id="el2" />
        <img src={ecl2} alt="ecl1" className="ecl1" id="ecl2" />
        <div className="content1" id="content2">
          <span id="datainfo3">Friend purchases any course</span>
          <span id="datainfo4">Using your REFERRAL CODE in the payments page</span>
        </div>
      </div>
      <div id="data3">
        <img src={ellipse} alt="ellipse" className="ellipse" id="el3" />
        <img src={ecl3} alt="ecl1" className="ecl1" id="ecl3" />
        <div className="content1" id="content3">
          <span id="datainfo5">You get ₹ 200 as referral money</span>
          <span id="datainfo6">Of total purchase the friend makes shareable to your wallet</span>
        </div>
      </div>
      <div id="data4">
        <img src={ellipse} alt="ellipse" className="ellipse" id="el4" />
        <img src={ecl4} alt="ecl1" className="ecl1" id="ecl4" />
        <div className="content1" id="content4">
          <span id="datainfo7">Your Friend gets ₹ 200 Off</span>
          <span id="datainfo8">On his overall fee on successful purchase using your referral code</span>
        </div>
      </div>
      <div id="data5">
        <img src={ellipse} alt="ellipse" className="ellipse" id="el5" />
        <img src={ecl5} alt="ecl1" className="ecl1" id="ecl5" />
        <div className="content1" id="content5">
          <span id="datainfo9">Transfer money from wallet</span>
          <span id="datainfo10">When the wallet balance reaches ₹200 or more, you can withdraw it</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
