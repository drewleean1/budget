import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

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
        const response = await fetch(`https://budget-drewleean-80248645fdf0.herokuapp.com/expenses/month/${month}/year/${year}`);
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
            <div className = "iFrame" text-align="center" border-width="0" >
                <iframe className="frame"
                    title="iFrame Example"
                    src= {`https://budget-flask-dr-0a0cc3b7e382.herokuapp.com/catBar/${month}/${year}`}
                    width= "100%" height = "640"
                    border-width="0" 
                    >
                </iframe>
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