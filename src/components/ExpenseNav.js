import React from 'react';
import { Link } from 'react-router-dom';


function ExpenseNav() {
  
  return (
    <nav className = 'ExpenseNav'>
        <Link to="../ExpensePage">Expense</Link>
        <Link to='../CategoryPage/11/2023'>Categories</Link>
        <Link to="../SearchCatPage/11/2023/Travel">Search Category</Link>
    </nav>
  );
}

export default ExpenseNav;
