import {React, useState, useEffect} from 'react'; 
import {useNavigate, useParams} from 'react-router-dom';
import MonthYear from '../components/MonthYear';
import ExpenseNav from '../components/ExpenseNav';
import ExpenseLog from '../components/ExpenseLog';
const { user, isAuthenticated, isLoading } = useAuth0();

const SearchMonth = ({setExpense}) => {

    const months = [ '',"January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]; 

    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 

    const{month, year} = useParams();

    let headerMonth = months[month];

    const loadExpenses = async () => {
        const email = user.email; 
        const monthToSearch = {email, month, year};
        const response = await fetch(`http://localhost:3000/expenses/currentMonth`, {
            method: 'post', 
            body: JSON.stringify(monthToSearch), 
            headers: {'Content-Type': 'application/json',},
        });
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
    }, []);


    return (
        <>
        <ExpenseNav/>
        <article> 
        <div className = "ExpenseHeader">
            <h3>{headerMonth} {year}</h3>
            <MonthYear />
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

export default SearchMonth;