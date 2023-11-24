import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';


function Nav() {
  return (
    <div className="ExpenseHeader">
          <nav className="appNav">
        <Link to="/">Home</Link>
        <Link to="../AboutPage">About Me</Link>
    </nav>         
    <LogoutButton />
    </div>
  );
}

export default Nav;
