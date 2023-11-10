import React from 'react';
import { Link } from 'react-router-dom';


function ExpenseNav() {
  return (
    <nav className = 'ExpenseNav'>
        <Link to="../ExpensePage">Expense</Link>
        <Link to="../BudgetPage">Budget</Link>
        <Link to="../CategoryPage">Categories</Link>
        <Link to="../SearchCatPage">Search Category</Link>
    </nav>
  );
}

export default ExpenseNav;
