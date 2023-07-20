import React from 'react'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Point } from 'chart.js'
import { Scatter } from 'react-chartjs-2'

export interface IBrownCharProps {
    dataPoints: Point[]
}

const BrownChart: React.FC<IBrownCharProps> = ({ dataPoints }) => {
    Chart.register(LinearScale, CategoryScale, PointElement, LineElement)

    return <React.Fragment>
        <Scatter data={{
            datasets: [
                {
                    label: "Random points",
                    data: dataPoints,
                    backgroundColor: "red"
                }
            ]
        }} height={700} width={1000}

            options={{
                animation: {
                    duration: 0,
                },
                backgroundColor: "salmon",
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Random set increment"
                    },
                }
            }}
        />
    </React.Fragment>
}

export default BrownChart