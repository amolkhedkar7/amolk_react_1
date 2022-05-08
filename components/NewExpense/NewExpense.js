import './NewExpense.css';

import FormExpense from './FormExpense';

const NewExpense = (props) =>{

    const saveExpenseDataHandler = (expenseData) =>{
        const data = {...expenseData, 
            id: Math.random().toString()};
        props.onAddExpense(data);
    };

    return (<div className='new-expense'>
        <FormExpense onSaveExpenseData={saveExpenseDataHandler}></FormExpense>
    </div>);
};

export default NewExpense;