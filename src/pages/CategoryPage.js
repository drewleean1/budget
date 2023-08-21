import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import CategoryLog from "../components/CategoryLog";
import ExpenseNav from "../components/ExpenseNav";

const CategoryPage = ({setCMonth, setCYear, givenMonth, givenYear}) => {

    const months = [ '',"January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    
    
    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 
    const [month, setMonth] = useState(givenMonth);
    const [year, setYear] = useState(givenYear);

    let currentMonth = months[month];

    const loadExpenses = async () => {
        const response = await fetch(`https://budget-drewleean-80248645fdf0.herokuapp.com/expenses/month/${month}/year/${year}`);
        const expenses = await response.json(); 
        setExpenses(expenses);
    }

    const onMonthYear = async (cMonth, cYear) => {
        //setCMonth(month); 
        //setCYear(year); 
        //window.location.reload();
        loadExpenses();
        //pivot("/CategoryPage");
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
                
            <h3>{currentMonth} {year}</h3>
                <CategoryLog
                    expenses = {expenses}
                    givenMonth = {month}
                    givenYear = {year}/>
            </article>
        </>
    );
}

export default CategoryPage;