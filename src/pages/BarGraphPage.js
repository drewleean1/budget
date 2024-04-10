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
            <SearchYear/>
        </div>

        <div className = "ExpenseHeader">
            <h3>Monthly spend for {year}</h3>
        </div>
        <div className = "iFrame">
        <iframe className="frame"
            title="iFrame Example"
            src= {`https://budget-flask-dr-0a0cc3b7e382.herokuapp.com/createBar/${year}`}
            width= "100%" height = "640"
            border-width="0"
            >
            </iframe>
        </div>
        </article>
    </>
    )

}

export default BarGraphPage;