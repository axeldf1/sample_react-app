import './Chart.css'
import ChartBar from "./CharBar";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const max = Math.max(...dataPointsValue)

    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                    value={dataPoint.value}
                max={max}
                label={dataPoint.label}>
            </ChartBar>)}
    </div>
}

export default Chart