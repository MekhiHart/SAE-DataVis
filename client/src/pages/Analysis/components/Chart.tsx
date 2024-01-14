// BarChart.tsx
import "../index.css"
import { Interfaces } from '../../../utils/namespaces/Interfaces';
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
} from 'chart.js';

import {Bar, Line} from "react-chartjs-2"

interface ChartProps {
  ChartData: Interfaces.IChart["ChartData"]
}

enum ChartMode {
  Line = 1,
  Bar,
  Pie
}

export default function Chart(props:ChartProps){
  ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  )

  const [chartMode, setChartMode] = useState<ChartMode>(ChartMode.Line)
  const data = props.ChartData

  const Graph = () => {
    switch (chartMode){
      case ChartMode.Line:
        return <Line data={data.data}/>
      case ChartMode.Bar:
        return <Bar data={data.data}/>
    }
  }

  return (
    <div id="chart--container">
        <Graph />
    </div>
  );
}

