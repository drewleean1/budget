import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function ExpenseNav() {
  
  return (
    <div className="" >
      <nav className="ExpenseNav">
        <Link to="../">Expense</Link>
        <Link to='../CategoryPage/3/2024'>Categories</Link>
        <Link to="../SearchCatPage/3/2024/Groceries">Search Category</Link>
        <Link to="../BarGraph/2024">Bar Graph</Link>
      </nav>         
    </div>
  );
}

export default ExpenseNav;
