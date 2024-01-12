import { useEffect, useState } from "react"
import { HomeViewNS } from "../utils/namespace/HomeNS";
import { dbs3Controller } from "../services/api/dbs3Controller";

export const useGetRaceFolders = () => {
    const [raceFolders, setRaceFolders] = useState<HomeViewNS.RaceLog["RaceLogData"][]>([])
    useEffect(() => {
        const fetchData = async () =>{
            const data = await dbs3Controller.GetRaceFolders()
            setRaceFolders(data)
        }

        fetchData()
    },[])
    return {
        raceFolders
    }
}
