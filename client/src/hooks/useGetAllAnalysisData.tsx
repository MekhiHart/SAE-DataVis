import {useState, useEffect} from "react"
import { dbs3Controller } from "../services/api/dbs3Controller"
import { Interfaces } from "../utils/namespaces/Interfaces"


export const useGetAllAnalysisData = (bucketKey: string) => {
    const [subsystemData, setSubsystemData] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const subsystemLogs: Interfaces.ISubsystem[] = await dbs3Controller.GetRaceFolderContents(bucketKey)
            const temp = subsystemLogs.map( async (subsystem) => {
                const data = await dbs3Controller.GetAnalysisData(subsystem.key)
                return data
            })
            const data = await Promise.all(temp)
            setSubsystemData(data)
            
        } // fetchData
        fetchData()

    },[]) // useEffect

    return {subsystemData}
}