// BarChart.tsx
import "../index.css"
import { Interfaces } from '../../../utils/namespaces/Interfaces';
import { SetStateAction } from "react";
import { Dispatch } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
} from 'chart.js';
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from 'react-bootstrap/DropdownButton';

import {Bar, Line, Pie} from "react-chartjs-2"

interface ChartProps {
  ChartData: Interfaces.IChart["ChartData"],
  analysisMode: AnalysisMode
  setChartMode: Dispatch<SetStateAction<AnalysisMode>>
}

enum AnalysisMode {
  Line = 1,
  Bar,
  Pie
}

export default function Chart(props:ChartProps){
  ChartJS.register(
    ArcElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  )

  const data = props.ChartData
  const chartMode = props.analysisMode
  const setChartMode = props.setChartMode

  const Graph = () => {
    switch (chartMode){
      case AnalysisMode.Line:
        return <Line data={data.data}/>
      case AnalysisMode.Bar:
        return <Bar data={data.data}/>
      case AnalysisMode.Pie:
        return <Pie data={data.data}/>
    }
  }

  return (
    <div id="chart--container">
        <DropdownButton show={true} id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item onClick={() => setChartMode(AnalysisMode.Line)}>Line</Dropdown.Item>
          <Dropdown.Item onClick={() => setChartMode(AnalysisMode.Bar)}>Bar</Dropdown.Item>
          <Dropdown.Item onClick={() => setChartMode(AnalysisMode.Pie)}>Pie</Dropdown.Item>
        </DropdownButton>

        <Graph />
    </div>
  );
}

