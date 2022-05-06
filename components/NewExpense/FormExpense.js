import React, {useState} from 'react';
import './FormExpense.css';

const FormExpense = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value());
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value());
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return(<form>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
            </div>
            <div className='new-expense__action'>
                <button type='submin'>Add Expense</button>
            </div>
        </div>
    </form>);
};

export default FormExpense;