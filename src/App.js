import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import StaffPage from './pages/StaffPage.js';
import ExpensePage from './pages/ExpensePage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import EditExpensePage from './pages/EditExpensePage.js';
import SearchCatPage from './pages/SearchCatPage.js';
import SearchDatePage from './pages/SearchDatePage.js';
import CategoryPage from "./pages/CategoryPage.js";
import CategoryRow from "./components/CategoryRow.js";


import './App.css';

function App() {

  const [expense, setExpenseToEdit] = useState([])
  const [cat, setCategoryToSearch] = useState("");
  const [sDate, setSDate] = useState(""); 
  const [eDate, setEDate] = useState("");
  const [cMonth, setCMonth] = useState(""); 
  const [cYear, setCYear] = useState("");

  return (
    <div className="App">
      <BrowserRouter>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/budget" element={<HomePage />} />
                <Route path="/StaffPage" element={<StaffPage/>}/>
                <Route path="/ExpensePage" element={<ExpensePage setExpense={setExpenseToEdit} setCategory ={setCategoryToSearch} setCMonth = {setCMonth} setCYear = {setCYear} setDateStart = {setSDate} setDateEnd={setEDate}/>}/>
                <Route path="/AddExpensePage" element={<AddExpensePage/>}/>
                <Route path="/EditExpensePage" element={<EditExpensePage givenExpense = {expense}/>}/>
                <Route path="/SearchCatPage" element = {<SearchCatPage setExpense={setExpenseToEdit} givenCategory = {cat} />}/>
                <Route path="/SearchDatePage" element = {<SearchDatePage setExpense={setExpenseToEdit} startDate = {sDate} endDate = {eDate}/>}/>
                <Route path="/CategoryPage" element = {<CategoryPage setExpense={setExpenseToEdit} setCategory ={setCategoryToSearch} givenMonth ={cMonth} givenYear={cYear} setCMonth = {setCMonth} setCYear = {setCYear}/>}/>
                <Route path="/CategoryRow" element ={<CategoryRow setCategory= {setCategoryToSearch} />}/>
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; Andrew Lee 2023</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
