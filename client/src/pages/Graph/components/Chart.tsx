// BarChart.tsx
import "../index.css"
import { Interfaces } from '../../../utils/namespaces/Interfaces';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import {Bar} from "react-chartjs-2"

interface ChartProps {
  ChartData: Interfaces.IChart["ChartData"]
}

export default function Chart(props:ChartProps){
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = props.ChartData

  return (
    <div id="chart--container">
      <Bar
        data={data.data}
      />
    </div>
  );
}