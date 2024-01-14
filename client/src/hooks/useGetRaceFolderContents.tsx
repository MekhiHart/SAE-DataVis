
import { useEffect, useState } from "react"
import { Interfaces } from "../utils/namespaces/Interfaces"
import { dbs3Controller } from "../services/api/dbs3Controller"

export const useGetRaceFolderContents = (bucketKey:string) =>{
    const [subsystemLogs, setSubsystemLogs] = useState<Interfaces.ISubsystem["SubsystemData"][]>([])
    useEffect(() => {
        const fetchData = async () =>{
            const json = await dbs3Controller.GetRaceFolderContents(bucketKey)
            setSubsystemLogs(json)
        }
    
        fetchData()
    
    },[bucketKey])

    return {subsystemLogs, setSubsystemLogs}
}