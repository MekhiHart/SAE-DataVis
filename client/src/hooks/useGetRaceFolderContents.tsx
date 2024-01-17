
import { useEffect, useState } from "react"
import { Interfaces } from "../utils/namespaces/Interfaces"
import { dbs3Controller } from "../services/api/dbs3Controller"

export const useGetRaceFolderContents = (bucketKey:string | undefined) =>{
    const [subsystemLogs, setSubsystemLogs] = useState<Interfaces.ISubsystem[]>([])
    useEffect(() => {
        const fetchData = async () =>{
            if (bucketKey){
                const json = await dbs3Controller.GetRaceFolderContents(bucketKey)
                setSubsystemLogs(json)
            } else{
                // TODO handle error here
            }

        }
    

        fetchData()
        
        
    
    },[bucketKey])

    return {subsystemLogs, setSubsystemLogs}
}