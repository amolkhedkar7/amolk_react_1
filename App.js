import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  /*
  const getExpenseArray = (inputExpenses, filterYearValue) =>{
    console.log(inputExpenses);
    var filteredExpenses = inputExpenses.filter(expense => {
      return (expense.date.getFullYear() === Number(filterYearValue));
    });
    console.log(filteredExpenses);
    return filteredExpenses;
  };
  */

  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) =>{
    setExpenses(function(previousExpenses){
        console.log([expense, ...previousExpenses]);
        return [expense, ...previousExpenses];
    });
  };

  /*
  const yearFilterChangeHandler = (selectedFilterYear) =>{
      setExpenses(getExpenseArray(dummy_expenses, selectedFilterYear));
  };
  */

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
	  <div>
    </div>
      <Expenses expenses={expenses} /*onYearFilterChange={yearFilterChangeHandler}*/></Expenses>
    </div>
  );
}

export default App;
