import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/schedule">
          Schedule
          </Link>
        </li>
        <li>
          <Link to="/map">
          Map
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
