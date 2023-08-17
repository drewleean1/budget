import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import ExpenseLog from '../components/ExpenseLog';
import AddExpenseRow from '../components/AddExpenseRow';
import CategoryLog from "../components/CategoryLog";
import ExpenseNav from "../components/ExpenseNav";


const ExpensePage = ({setCategory, setExpense, setCMonth, setCYear, setDateStart, setDateEnd}) => {

    let today = new Date(); 
    let day = today.getDate();
    let month = today.getMonth()+1; 
    let year = today.getFullYear();

    const months = [ '',"January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    let currentMonth = months[month];
    
    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 
    const [categories, setCategories] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const loadExpenses = async () => {
        const response = await fetch(`/expenses/month/${month}/year/${year}`);
        const expenses = await response.json(); 
        setExpenses(expenses);
    }

    const onEditExpense = async expense => {
        setExpense(expense); 
        pivot("/EditExpensePage");
    }

    const onSearchCategory = async cat => {
        setCategory(categories);
        pivot("/SearchCatPage");
    }

    const onSearchDate = async cat => {
        setDateStart(startDate); 
        setDateEnd(endDate); 
        pivot("/SearchDatePage");
    }

    const onDeleteExpense = async _id => {
        const response = await fetch(`/expenses/${_id}`, { method: 'delete' });
        if (response.status === 204) {
            const getResponse = await fetch('/expenses'); 
            const expenses = await getResponse.json();
            setExpenses(expenses);
        }
        else {
            console.error(`Unable to delete expense with _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadExpenses();
        setCMonth(month);
        setCYear(year);
        console.log(month, year)
    }, []);

    return (
        <>
            <ExpenseNav/>

            <article>
            <h3>Add an expense:</h3>
            
            <AddExpenseRow/>



            <form onSubmit={(e) => {e.preventDefault();}}>
                <fieldset>
                <label htmlFor="searchDate">Date</label>
                <input
                        type="date"
                        placeholder="Start Date"
                        value={startDate}
                        onChange={e =>setStartDate(e.target.value)}
                        id = "startDate"/>
                <input
                        type="date"
                        placeholder="End Date"
                        value={endDate}
                        onChange={e =>setEndDate(e.target.value)}
                        id = "endDate"/>
                <button
                        type="button"
                        onClick={onSearchDate}
                        id="search"
                    >Search</button>
                </fieldset>
            </form>
            <h3>{currentMonth} {year}</h3>
            <ExpenseLog 
                expenses={expenses} 
                onEdit={onEditExpense} 
                onDelete={onDeleteExpense} 
            />  
            </article>
        </>
    );
}

export default ExpensePage;