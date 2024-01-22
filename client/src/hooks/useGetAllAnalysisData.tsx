import {useState, useEffect} from "react"
import { dbs3Controller } from "../services/api/dbs3Controller"
import { Interfaces } from "../utils/namespaces/Interfaces"


export const useGetAllAnalysisData = (bucketKey: string) => {
    const [graphData, setGraphData] = useState<Interfaces.IChart>()

    useEffect(() => {
        const fetchData = async () => {
            const subsystemLogs: Interfaces.ISubsystem[] = await dbs3Controller.GetRaceFolderContents(bucketKey)
            const temp = subsystemLogs.map( async (subsystem) => {
                const data = await dbs3Controller.GetAnalysisData(subsystem.key)
                return data
            }) // temp

            const dataJSONArr = await Promise.all(temp)
            const chartData: Interfaces.IChart = {
                labels: dataJSONArr[0].data.map(data => data.horizontalLabel),
                datasets: dataJSONArr.map(dataJSON => ({
                    label: dataJSON.mainLabel,
                    data: dataJSON.data.map((data) => data.value),
                    backgroundColor: getRandomRGB(),
                    borderColor: getRandomRGB(),
                    borderWidth: 2,
                }) )
            } // chartData

            setGraphData(chartData)

            
        } // fetchData
        fetchData()

    },[]) // useEffect

    return {graphData}
}

function getRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red}, ${green}, ${blue})`;
  }