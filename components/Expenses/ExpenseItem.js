
import React,{useState} from 'react';
import './ExpenseItem.css';  
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    let title = props.title;
    const [titleHolder, updateTitleHolderValue] = useState(title);
    const clickHandler = () =>{
        updateTitleHolderValue("Updated!!");
    };

    return(
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{titleHolder}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Change title</button>
        </div>
    </Card>
    );
}

export default ExpenseItem;