import {React, useState, useEffect} from 'react'; 
import {useNavigate, useParams} from 'react-router-dom';
import ExpenseLog from '../components/ExpenseLog';
import ExpenseNav from "../components/ExpenseNav";
import SearchYear from '../components/SearchYear';

const BarGraphPage = () => {
    const pivot = useNavigate();
    
    const{year} = useParams();

    return (
        <>
        <ExpenseNav/>
        <article>

        <div className = "ExpenseHeader">
            <h3>Monthly spend for {year}</h3>
        </div>
            <img src= "http://budget-flask-dr-0a0cc3b7e382.herokuapp.com/createBar/2024" width="640" length = "480"/>
        </article>
    </>
    )

}

export default BarGraphPage;