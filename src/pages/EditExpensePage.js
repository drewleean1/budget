import {React, useState} from 'react'; 
import {useNavigate} from 'react-router-dom';

function EditExpensePage ({givenExpense}) {

    const [date, setDate]           = useState(givenExpense.date); 
    const [item, setItem]           = useState(givenExpense.item);
    const [amount, setAmount]       = useState(givenExpense.amount); 
    const [category, setCategory]   = useState(givenExpense.category); 
    const [method, setMethod]       = useState(givenExpense.method);

    const pivot = useNavigate();
    
    const editExpense = async() => {
        const response = await fetch(`https://budget-drewleean-80248645fdf0.herokuapp.com/expenses/${givenExpense._id}`, {
            method: 'put', 
            body: JSON.stringify({
                date: date, 
                item: item, 
                amount: amount, 
                category: category, 
                method: method
            }), 
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert('Expense successfully edited');
            pivot("/ExpensePage");
        } 
        else {
            alert(`We were unable to edit your expense: status code = ${response.status}`); 
            pivot("/ExpensePage")
        }
    }

    return (
        <>
        <article> 
            <h2>Edit the following expense</h2>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <fieldset> 
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        placeholder="Date"
                        value={date}
                        onChange={e =>setDate(e.target.value)}
                        id = "date"/>

                    
                    <label htmlFor="item">Expense Name</label>
                    <input
                        type="text"
                        placeholder="Rent"
                        value={item}
                        onChange={e =>setItem(e.target.value)}
                        id = "item"/>

                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        placeholder="$800"
                        value={amount}
                        onChange={e =>setAmount(e.target.value)}
                        id = "amount"/>

                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        placeholder="Housing"
                        value={category}
                        onChange={e =>setCategory(e.target.value)}
                        id = "category"/>

                    <label htmlFor="method">Payment Method</label>
                    <input
                        type="text"
                        placeholder="Check"
                        value={method}
                        onChange={e =>setMethod(e.target.value)}
                        id = "method"/>

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={editExpense}
                        id="submit"
                    >Update this expense</button></label>

                </fieldset>
            </form>
        </article>
        </>
    )

}

export default EditExpensePage;