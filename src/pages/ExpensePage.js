import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import MonthYear from "../components/MonthYear";
import ExpenseLog from '../components/ExpenseLog';
import AddExpenseRow from '../components/AddExpenseRow';
import ExpenseNav from "../components/ExpenseNav";
import LoginButton from "../components/LoginButton";

const ExpensePage = ({setExpense}) => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    let today = new Date(); 
    let month = today.getMonth()+1; 
    let year = today.getFullYear();

    const months = [ '',"January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    

    let currentMonth = months[month];
    
    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 

    const loadExpenses = async () => {
        console.log(month, year)
        const response = await fetch(`https://budget-drewleean-80248645fdf0.herokuapp.com/expenses/month/${month}/year/${year}`);
        const expenses = await response.json(); 
        setExpenses(expenses);
    }

    const onEditExpense = async expense => {
        setExpense(expense); 
        pivot("/EditExpensePage");
    }

    const onDeleteExpense = async _id => {
        if (window.confirm("Are you sure you want to delete this expense?")) {
            const response = await fetch(`https://budget-drewleean-80248645fdf0.herokuapp.com/expenses/${_id}`, { method: 'delete' });
            if (response.status === 204) {
                const getResponse = await fetch('https://budget-drewleean-80248645fdf0.herokuapp.com/expenses'); 
                const expenses = await getResponse.json();
                setExpenses(expenses);
            }
            else {
                console.error(`Unable to delete expense with _id = ${_id}, status code = ${response.status}`)
            }}
        else {}
    }

    useEffect(() => {
        loadExpenses();
        console.log(user.json());
    }, []);

    if (isAuthenticated) {
        return (
            <>
                
                <ExpenseNav/>

                <article>
                <div className="ExpenseHeader">
                    <h3>Add an expense:</h3>
                    <AddExpenseRow/>
                </div>

                <div className = "ExpenseHeader">
                    <h3>{currentMonth} {year}</h3>
                    <MonthYear />
                </div>

                <ExpenseLog 
                    expenses={expenses} 
                    onEdit={onEditExpense} 
                    onDelete={onDeleteExpense} 
                />  
                </article>
            </>
        );
    }

    else {
        return(
            <>
            <h2>Keep track of your expenses with this REACT app</h2>
                <LoginButton/>
            </>
        );
    }
}

export default ExpensePage;