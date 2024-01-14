// BarChart.tsx

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



  return (
    <div>
      <Bar
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "Revenue",
              data: [200, 300, 400],
            },
          ],
        }}
      />
    </div>
  );
}