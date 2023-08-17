import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import CategoryLog from "../components/CategoryLog";
import ExpenseNav from "../components/ExpenseNav";

const CategoryPage = ({setCMonth, setCYear, givenMonth, givenYear}) => {

    const months = [ '',"January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    let currentMonth = months[givenMonth];
    
    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const loadExpenses = async () => {
        const response = await fetch(`/expenses/month/${givenMonth}/year/${givenYear}`);
        const expenses = await response.json(); 
        setExpenses(expenses);
    }

    const onMonthYear = async (cMonth, cYear) => {
        console.log('here', month, year);
        setCMonth(month); 
        setCYear(year); 
        window.location.reload();

    }

    useEffect(() => {
        loadExpenses();
    }, []);

    return (
        <>
            <ExpenseNav/>

            <article>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <fieldset> 
                    <label htmlFor="month">Month</label>
                    <input
                        type="number"
                        placeholder="Month"
                        value={month}
                        onChange={e =>setMonth(e.target.value)}
                        id = "setMonth"/>
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        placeholder="Year"
                        value={year}
                        onChange={e =>setYear(e.target.value)}
                        id = "setYear"/>
                    <button
                        type="button"
                        onClick={onMonthYear}
                        id="search"
                    >Search</button>
                </fieldset>
            </form>
                
            <h3>{currentMonth} {givenYear}</h3>
                <CategoryLog
                    expenses = {expenses}
                    givenMonth = {givenMonth}
                    givenYear = {givenYear}/>
            </article>
        </>
    );
}

export default CategoryPage;