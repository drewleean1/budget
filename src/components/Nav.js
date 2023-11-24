import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="appNav">
        <Link to="/">Home</Link>
        <Link to="../AboutPage">About Me</Link>
    </nav>         
  );
}

export default Nav;
