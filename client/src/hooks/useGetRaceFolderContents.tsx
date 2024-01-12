
import { useEffect, useState } from "react"
import { Interfaces } from "../utils/namespaces/Interfaces"

export const useGetRaceFolderContents = (bucketKey:string) =>{
    const [subsytemLogs, setSubsystemLogs] = useState<Interfaces.ISubsystem["SubsystemData"][]>([])
    useEffect(() => {
        const fetchData = async () =>{
            const url = "http://localhost:8000/api/getRaceFolderContents/"
            const data = await fetch(url, {
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
            const json = await data.json()
            setSubsystemLogs(json)
        }
    
        fetchData()
    
    },[bucketKey])

    return {subsytemLogs, setSubsystemLogs}
}