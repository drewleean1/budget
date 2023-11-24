import {React, useState} from 'react'; 
import {useNavigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function CreateNewUser ({expense, onEdit, onDelete}) {

    const { user, isAuthenticated, isLoading } = useAuth0();

    const email = user.email; 
    const user_id = user.sub; 

    const pivot = useNavigate();
    
    const addUser = async() => {
        const newUser = {email, user_id}; 
        const response = await fetch('http://localhost:3000/users', {
            method: 'post', 
            body: JSON.stringify(newUser), 
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
                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addUser}
                        id="submit"
                    >Add User</button></label>

            </form>
    );
}

export default CreateNewUser; 