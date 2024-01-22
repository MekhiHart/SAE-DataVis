
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Chart from "./components/Chart";
import { useGetAllAnalysisData } from "../../hooks/useGetAllAnalysisData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons/faFlagCheckered";


enum AnalysisMode {
  Line = 1,
  Bar,
  Pie
}

export default function Analysis(){
    const location = useLocation()
    
    const bucketKey = location.state && location.state.bucketKey
    const raceName = location.state && location.state.raceName
    const {graphData} = useGetAllAnalysisData(bucketKey)
    const [analysisMode, setAnalysisMode] = useState<AnalysisMode>(AnalysisMode.Line)

    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <h2 style={{display:"flex", alignItems:"center"}}> {<FontAwesomeIcon  style={{paddingRight: "10px"}}icon={faFlagCheckered}/>} {raceName}</h2>
        <div>
          <button className="custom--button shadows" onClick={() => setAnalysisMode(AnalysisMode.Line)}>Line</button>
          <button className="custom--button shadows" onClick={() => setAnalysisMode(AnalysisMode.Bar)}>Bar</button>
          <button className="custom--button shadows" onClick={() => setAnalysisMode(AnalysisMode.Pie)}>Pie</button>
        </div>
        {graphData && <Chart ChartData={graphData} analysisMode={analysisMode} setChartMode={setAnalysisMode}/>}
      </div>
    );
}