
import { useLocation } from "react-router-dom";
import { useState} from "react"

import Chart from "./components/Chart";
import { useGetAllAnalysisData } from "../../hooks/useGetAllAnalysisData";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons/faFlagCheckered";
import { SubsystemButton } from "../../components/SubsystemButton";


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
    
    const [renderSubsystem, setRenderSubsystem] = useState<{[subsystemName: string]: boolean}>({
      "Brakes": false,
      "Chassis": false,
      "Drive Train": false,
      "Front Suspension": false,
      "Rear Differential": false,
      "Rear Suspension": false,
      "Steering": false
    });
    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <h2 style={{display:"flex", alignItems:"center"}}> {<FontAwesomeIcon  style={{paddingRight: "10px"}}icon={faFlagCheckered}/>} {raceName}</h2>
        <div className="flex">
          {graphData && graphData.datasets.map((dataset) => <SubsystemButton key={dataset.subsystem} subsystemName={dataset.subsystem} onClick={setRenderSubsystem}/>)}
        </div>
        {graphData && <Chart 
        ChartData={{
          labels: graphData.labels ,
          datasets: graphData.datasets.filter((data) => renderSubsystem[data.subsystem] === true)
        }} analysisMode={analysisMode} setChartMode={setAnalysisMode}
        
        />}
      </div>
    );
}