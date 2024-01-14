import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import { Interfaces } from "../../utils/namespaces/Interfaces";



export default function Analysis(){
    const location = useLocation()
    const [graphData, setGraphData] = useState<Interfaces.IChart["ChartData"]>()
    const bucketKey = location.state && location.state.bucketKey


    useEffect(() => {
        const fetchData = async () =>{
            const url = "http://localhost:8000/api/getGraphJSON/"
            const data = await fetch(url,{
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers:{
                    "Content-Type": "application/json"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify({bucket_key:bucketKey})
            })
            const json: Interfaces.IAnalysis["AnalysisData"] = await data.json()

            setGraphData({
              data:{
                labels: json.data.map(data => data.year),
                datasets: [
                  {
                    label: "Users Gained",
                    data: json.data.map((data) => data.userLost),
                    backgroundColor: [
                      "rgba(75,192,192,1)",
                      "#ecf0f1",
                      "#50AF95",
                      "#f3ba2f",
                      "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                  },
                ],
              }

            })
        }
        fetchData()
        
    },[])
    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <h2>{bucketKey}</h2>
        {graphData && <Chart ChartData={graphData}/>}
      </div>
    );
}