import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="appNav">
        <Link to="/">Home</Link>
        <Link to="../StaffPage">Staff</Link>
        <Link to="../ExpensePage">Expense Log</Link>
    </nav>
  );
}

export default Nav;
