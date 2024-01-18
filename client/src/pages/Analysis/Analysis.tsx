
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Chart from "./components/Chart";
import SubsystemIcon from "../../components/SubsystemIcon";
import { useGetAnalysisData } from "../../hooks/useGetAnalysisData";


enum AnalysisMode {
  Line = 1,
  Bar,
  Pie
}

export default function Analysis(){
    const location = useLocation()
    
    const bucketKey = location.state && location.state.bucketKey
    const subsystemName = location.state && location.state.subsystemName
    const {graphData} = useGetAnalysisData(bucketKey)
    const [analysisMode, setAnalysisMode] = useState<AnalysisMode>(AnalysisMode.Line)

    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <h2 style={{display:"flex", alignItems:"center"}}> {<SubsystemIcon subsystemName={subsystemName}/>} {subsystemName}</h2>
        <div>
          <button className="custom--button shadows" onClick={() => setAnalysisMode(AnalysisMode.Line)}>Line</button>
          <button className="custom--button shadows" onClick={() => setAnalysisMode(AnalysisMode.Bar)}>Bar</button>
          <button className="custom--button shadows" onClick={() => setAnalysisMode(AnalysisMode.Pie)}>Pie</button>
        </div>
        {graphData && <Chart ChartData={graphData} analysisMode={analysisMode} setChartMode={setAnalysisMode}/>}
      </div>
    );
}