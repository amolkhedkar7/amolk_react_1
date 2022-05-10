import React, {useState} from 'react';
import './FormExpense.css';

const FormExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : Number(enteredAmount),
            date : new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        return expenseData;

    };

    const cancelClickHandler = (event) =>{
        event.preventDefault();
        setFormHTML(addNewButtonJSX);
    };

    const addNewExpenseHandler = event =>{
        event.preventDefault();
        setFormHTML(entireFormJSX);
    };

    const entireFormJSX = 
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31"value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
            <div className='new-expense__action'>
                <button onClick={cancelClickHandler}>Cancel</button>
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>

    const addNewButtonJSX = 
    <div className='new-expense__action'>
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
    </div>

    const [formHTML, setFormHTML] = useState(addNewButtonJSX);

    return(formHTML);
};

export default FormExpense;