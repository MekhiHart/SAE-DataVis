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
  LineElement,
  PointElement
} from 'chart.js';

import {Bar, Line} from "react-chartjs-2"

interface ChartProps {
  ChartData: Interfaces.IChart["ChartData"]
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
  );

  const data = props.ChartData

  return (
    <div id="chart--container">
      <Line
        data={data.data}
      />
    </div>
  );
}