import { useEffect, useState } from "react"
import { Interfaces } from "../utils/namespaces/Interfaces";
import { dbs3Controller } from "../services/api/dbs3Controller";

export const useGetRaceFolders = () => {
    const [raceFolders, setRaceFolders] = useState<Interfaces.IRaceLog[]>([])
    useEffect(() => {
        const fetchData = async () =>{
            const data = await dbs3Controller.GetRaceFolders()
            setRaceFolders(data)
        }

        fetchData()
    },[raceFolders])
    return {
        raceFolders
    }
}
