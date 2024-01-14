import { useLocation } from "react-router-dom";
import Chart from "./components/Chart";
import SubsystemIcon from "../../components/SubsystemIcon";
import { useGetAnalysisData } from "../../hooks/useGetAnalysisData";


export default function Analysis(){
    const location = useLocation()
    
    const bucketKey = location.state && location.state.bucketKey
    const subsystemName = location.state && location.state.subsystemName
    const {graphData, setGraphData} = useGetAnalysisData(bucketKey)

    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <h2 style={{display:"flex", alignContent:"center", alignItems:"center"}}> {<SubsystemIcon subsystemName={subsystemName}/>} {subsystemName}</h2>
        {graphData && <Chart ChartData={graphData}/>}
      </div>
    );
}