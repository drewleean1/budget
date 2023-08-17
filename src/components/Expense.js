import React from 'react'; 
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai';

function Expense ({expense, onEdit, onDelete}) {

    //const dateNoTime =  expense.date.toLocaleString('en-US', {month: 'numeric', day: 'numeric',  year: 'numeric' })
    
    const conPrice = expense.amount.toLocaleString('en-US', {     
        style: 'currency',     
         currency: 'USD',   
       });
    

    return (
        <tr>
            <td>{expense.date.substring(0, 10)}</td>
            <td>{expense.item}</td>
            <td>{conPrice}</td>
            <td>{expense.category}</td>
            <td>{expense.method}</td>
            <td><AiTwotoneEdit onClick = {() => onEdit(expense)} /></td>
            <td><AiFillDelete onClick = {() => onDelete(expense._id)} /></td>
        </tr>
    );
}

export default Expense; 