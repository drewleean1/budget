import React from 'react'; 
import Expense from './Expense'; 
import Summation from './Summation';

function ExpenseLog({expenses, onDelete, onEdit}) {

    const displayExpenses = expenses.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
      });

    return (
        
        <table id="expenses"> 
            <caption></caption>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Expense Name</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Payment Method</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody> 
                {displayExpenses.map((expense, i) => 
                    <Expense 
                        expense={expense} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)
                }
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td><Summation expenses ={displayExpenses}/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </table>
    );
}

export default ExpenseLog;