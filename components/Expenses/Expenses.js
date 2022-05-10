import React,{useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from '../NewExpense/ExpenseChart';

function Expenses(props){

  const [filterYearValue, setFilterYearValue] = useState('2020');
  
  const expenseFilterChangeHandler = (year) =>{
    console.log(year);
    setFilterYearValue(year);
    //props.onYearFilterChange(year);
  }; 

  const filteredExpense = props.expenses.filter(expense=>{
    return expense.date.getFullYear() === Number(filterYearValue);
  });

      return(
        <Card className="expenses">
            <ExpensesFilter selected={filterYearValue} onExpenseFilterChange={expenseFilterChangeHandler}></ExpensesFilter>
            <ExpenseChart expenses={filteredExpense}></ExpenseChart>
            <ExpensesList items = {filteredExpense} ></ExpensesList>
        </Card>
    );
};

export default Expenses;