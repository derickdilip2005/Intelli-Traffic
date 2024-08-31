import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Traffic Management Admin</div>
      <div className="projname">IntelliTraffic</div>
      <div className="profile">
        <span>Admin</span>
        <img src="police.jpg" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
