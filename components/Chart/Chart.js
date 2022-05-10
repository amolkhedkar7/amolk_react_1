import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    let valuesArray = props.dataPoints.map(dataPoint => {
        return dataPoint.value
    });

    let maxVal = Math.max(...valuesArray);

    return(<div className="chart">
            {props.dataPoints.map((dataPoint) =>{
                return <ChartBar 
                key = {dataPoint.label}
                value = {dataPoint.value}
                maxValue = {maxVal}
                label = {dataPoint.label}></ChartBar>
            })}
    </div>);
}

export default Chart;