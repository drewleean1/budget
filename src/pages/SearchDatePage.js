import {React, useState, useEffect} from 'react'; 
import {useNavigate} from 'react-router-dom';
import CategoryLog from '../components/CategoryLog';

import ExpenseLog from '../components/ExpenseLog';

const SearchDatePage = ({setExpense, startDate, endDate}) => {

    const pivot = useNavigate();

    const [expenses, setExpenses] = useState([]); 

    const loadExpenses = async () => {
        const response = await fetch(`/expenses/sDate/${startDate}/eDate/${endDate}`);
        const expenses = await response.json(); 
        setExpenses(expenses);
    }

    const onEditExpense = async expense => {
        setExpense(expense); 
        pivot("/EditExpensePage");
    }

    const onDeleteExpense = async _id => {
        const response = await fetch(`/expenses/${_id}`, { method: 'delete' });
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
        <article> 
        <ExpenseLog 
                expenses={expenses} 
                onEdit={onEditExpense} 
                onDelete={onDeleteExpense} 
            />
        </article>
        </>
    )

}

export default SearchDatePage;