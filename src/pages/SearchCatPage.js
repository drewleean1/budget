import {React, useState, useEffect} from 'react'; 
import {useNavigate, useParams} from 'react-router-dom';
import SearchCatMY from '../components/SearchCatMY';
import ExpenseLog from '../components/ExpenseLog';
import ExpenseNav from "../components/ExpenseNav";

const SearchCatPage = ({setExpense}) => {

    const months = [ '',"January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 

    const{month, year, category} = useParams();

    let headerMonth = months[month];

    const loadExpenses = async () => {
        //const response = await fetch(`/expenses/category/${givenCategory}`);
        const response = await fetch(`https://budget-drewleean-80248645fdf0.herokuapp.com/expenses/category/${category}/month/7/year/2023`);
        const expenses = await response.json(); 
        setExpenses(expenses);
    }


    const onEditExpense = async expense => {
        setExpense(expense); 
        pivot("/EditExpensePage");
    }

    const onDeleteExpense = async _id => {
        const response = await fetch(`https://budget-drewleean-80248645fdf0.herokuapp.com/expenses/${_id}`, { method: 'delete' });
        if (response.status === 204) {
            const getResponse = await fetch('https://budget-drewleean-80248645fdf0.herokuapp.com/expenses'); 
            const expenses = await getResponse.json();
            setExpenses(expenses);
        }
        else {
            console.error(`Unable to delete expense with _id = ${_id}, status code = ${response.status}`)
        }
    }

    useEffect(() => {
        loadExpenses();
    }, []);


    return (
        <>
        <ExpenseNav/>

        <article> 
        <div className = "ExpenseHeader">
            <h3>{category} spend for {headerMonth} {year}</h3>
            <SearchCatMY />
        </div>

        <ExpenseLog 
                expenses={expenses} 
                onEdit={onEditExpense} 
                onDelete={onDeleteExpense} 
            />
        </article>
        </>
    )

}

export default SearchCatPage;