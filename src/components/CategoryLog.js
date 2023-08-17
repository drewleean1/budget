import React from 'react'; 
import CategoryRow from './CategoryRow';
import Summation from './Summation';

function CategoryLog({expenses, givenMonth, givenYear}) {

    let listOfCategories = [];

    for (let i = 0; i < expenses.length; i++) {
        if (listOfCategories.includes(expenses[i]["category"]) === false) {
            listOfCategories.push(expenses[i]["category"])
        }
      }
    
    listOfCategories.sort()

    console.log(givenMonth, givenYear);

    return (
        
        <table id="expenses"> 
            <caption></caption>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody> 
                {listOfCategories.map((cat, i) => 
                    <CategoryRow 
                        givenCategory={cat} 
                        key={i}
                        givenMonth = {givenMonth}
                        givenYear = {givenYear}
                    />)
                }
                <tr>
                    <td>Total</td>
                    <td><Summation expenses ={expenses}/></td>
                </tr>
            </tbody>
        </table>
    );
}

export default CategoryLog;