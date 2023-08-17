import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Summation from './Summation';

function CategoryRow ({givenCategory, givenMonth, givenYear, setCategory}) {

    const [expenses, setExpenses] = useState([]); 

    const pivot = useNavigate();

    const loadExpenses = async () => {
        const response = await fetch(`/expenses/category/${givenCategory}/month/${givenMonth}/year/${givenYear}`);
        const expenses = await response.json(); 
        setExpenses(expenses);
    }

    const SearchCategory = async() => {
        setCategory(givenCategory)
        pivot('/SearchCatPage');
    }

    useEffect(() => {
        loadExpenses();
    }, []);

    //Just pass through expenses from CategoryLog

    return (
        <tr>
            <td>{givenCategory}</td>
            <td><Summation expenses={expenses}/></td>
        </tr>
    );
}

export default CategoryRow; 