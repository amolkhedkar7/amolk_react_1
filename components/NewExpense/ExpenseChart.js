import Chart from "../Chart/Chart";

const ExpenseChart  = (props) => {

    let chartDataPoint  = [
        {label: 'Jan', value : 0},
        {label: 'Feb', value : 0},
        {label: 'Mar', value : 0},
        {label: 'Apr', value : 0},
        {label: 'May', value : 0},
        {label: 'June', value : 0},
        {label: 'July', value : 0},
        {label: 'Aug', value : 0},
        {label: 'Sept', value : 0},
        {label: 'Oct', value : 0},
        {label: 'Nov', value : 0},
        {label: 'Dec', value : 0}
    ];

    for(var expense of props.expenses){
        chartDataPoint[expense.date.getMonth()].value += expense.amount;
    }

    return <Chart dataPoints = {chartDataPoint}></Chart>;

}

export default ExpenseChart;