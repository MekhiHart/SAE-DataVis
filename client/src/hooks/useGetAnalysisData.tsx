import { useEffect, useState } from "react";
import { Interfaces } from "../utils/namespaces/Interfaces";
import { dbs3Controller } from "../services/api/dbs3Controller";

export const useGetAnalysisData = (bucketKey: string) => {
    const [graphData, setGraphData] = useState<Interfaces.IChart["ChartData"]>()
    useEffect(() => {
        const fetchData = async () =>{
            const json = await dbs3Controller.GetAnalysisData(bucketKey)

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