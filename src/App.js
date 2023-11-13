import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import ExpensePage from './pages/ExpensePage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import EditExpensePage from './pages/EditExpensePage.js';
import SearchCatPage from './pages/SearchCatPage.js';
import CategoryPage from "./pages/CategoryPage.js";
import CategoryRow from "./components/CategoryRow.js";
import MonthYear from "./components/MonthYear.js";
import SearchMonth from "./pages/SearchMonth.js";

import './App.css';

function App() {

  const [expense, setExpenseToEdit] = useState([])
  const [cat, setCategoryToSearch] = useState("");

  return (
    <div className="App">
      <HashRouter>
        <header><Nav /></header>
        

        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ExpensePage" element={<ExpensePage setExpense={setExpenseToEdit}/>}/>
                <Route path="/AddExpensePage" element={<AddExpensePage/>}/>
                <Route path="/EditExpensePage" element={<EditExpensePage givenExpense = {expense}/>}/>
                <Route path="/SearchCatPage" element = {<SearchCatPage setExpense={setExpenseToEdit} givenCategory = {cat} />}/>
                <Route path="/CategoryPage/:month/:year" element = {<CategoryPage setExpense={setExpenseToEdit} />}/>
                <Route path="/CategoryRow" element ={<CategoryRow setCategory= {setCategoryToSearch} />}/>
                <Route path="/SearchMonth/:month/:year" element={<SearchMonth setExpense={setExpenseToEdit}/>}/>
            </Routes>
        </main>
        
        <footer>
          <p><cite>&copy; Andrew Lee 2023</cite></p>
        </footer>
        
        </HashRouter>
      </div>
    );
  }

export default App;
