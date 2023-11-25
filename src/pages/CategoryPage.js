import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
const { user, isAuthenticated, isLoading } = useAuth0();

import CategoryLog from "../components/CategoryLog";
import ExpenseNav from "../components/ExpenseNav";
import CategoryMonthYear from "../components/CategoryMonthYear";

const CategoryPage = () => {

    const months = [ '',"January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    
    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 

    const{month, year} = useParams();

    let headerMonth = months[month];

    const loadExpenses = async () => {
        const email = user.email; 
        const searchCatMonth = {email, category, month, year}
        const response = await fetch(`http://localhost:3000/expenses/searchCatMonth`, {
            method: 'post', 
            body: JSON.stringify(searchCatMonth), 
            headers: {'Content-Type': 'application/json',},

        });
        const expenses = await response.json(); 
        setExpenses(expenses);
    }
    

    useEffect(() => {
        loadExpenses();
    }, []);

    return (
        <>
            <ExpenseNav/>
            <article>
            <div className = "ExpenseHeader">
                <h3>{headerMonth} {year} spend by category</h3>
                <CategoryMonthYear />
            </div>
                <CategoryLog
                    expenses = {expenses}
                    givenMonth = {month}
                    givenYear = {year}/>
            </article>
        </>
    );
}

export default CategoryPage;