import { useEffect, useState } from "react";
import { Interfaces } from "../utils/namespaces/Interfaces";

export const useGetAnalysisData = (bucketKey: string) => {
    const [graphData, setGraphData] = useState<Interfaces.IChart["ChartData"]>()
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
        
    },[bucketKey])
    return {graphData, setGraphData}
}