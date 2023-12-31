import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function ExpenseNav() {
  
  return (
    <div className="ExpenseHeader" >
      <nav className="ExpenseNav">
        <Link to="../">Expense</Link>
        <Link to='../CategoryPage/11/2023'>Categories</Link>
        <Link to="../SearchCatPage/11/2023/Travel">Search Category</Link>
      </nav>         
      <LogoutButton />
    </div>
  );
}

export default ExpenseNav;
