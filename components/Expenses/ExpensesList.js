import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = (props) => {
    const expensesContent = <h2 className='expenenses-list__fallback'>No expenses found</h2>;
    if(props.items.length === 0){
        return expensesContent;
    }

    return(<ul className='expenses-list'>
    {props.items.map(expense => {
        return(<ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date={expense.date} />);
    })}
    </ul>);    

};

export default ExpensesList;