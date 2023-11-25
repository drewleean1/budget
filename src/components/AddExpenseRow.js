import {React, useState} from 'react'; 
import {useNavigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function AddExpenseRow ({expense, onEdit, onDelete}) {

    const [date, setDate]           = useState(''); 
    const [item, setItem]           = useState('');
    const [amount, setAmount]       = useState(''); 
    const [category, setCategory]   = useState(''); 
    const [method, setMethod]       = useState('');

    const { user, isAuthenticated, isLoading } = useAuth0();

    const email = user.email; 
    const user_id = user.sub; 

    const pivot = useNavigate();
    
    const addExpense = async() => {
        const newExpense = {date, item, amount, category, method, email}; 
        //const response = await fetch('https://budget-drewleean-80248645fdf0.herokuapp.com/expenses', {
        const response = await fetch('http://localhost:3000/expenses', {
            method: 'post', 
            body: JSON.stringify(newExpense), 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert('Expense successfully logged');
            window.location.reload();
        } 
        else {
            alert(`We were unable to log your expense: status code = ${response.status}`); 
            window.location.reload();
        }
    }

    return (
            <form className ='AddExpenseRow' onSubmit={(e) => {e.preventDefault();}}>
                    <label htmlFor="date"></label>
                    <input
                        type="date"
                        value={date}
                        onChange={e =>setDate(e.target.value)}
                        id = "date"
                        required
                        />

                    
                    <label htmlFor="item"></label>
                    <input
                        type="text"
                        placeholder="Expense Name"
                        value={item}
                        onChange={e =>setItem(e.target.value)}
                        id = "item"
                        required/>

                    <label htmlFor="amount"></label>
                    <input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={e =>setAmount(e.target.value)}
                        id = "amount"/>

                    <label htmlFor="category"></label>
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={e =>setCategory(e.target.value)}
                        id = "category"/>

                    <label htmlFor="method"></label>
                    <input
                        type="text"
                        placeholder="Payment Method"
                        value={method}
                        onChange={e =>setMethod(e.target.value)}
                        id = "method"/>

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addExpense}
                        id="submit"
                    >Add</button></label>

            </form>
    );
}

export default AddExpenseRow;