import { useEffect, useState } from "react"
import { HomeViewNS } from "../utils/namespace/HomeNS";

export const useGetRaceFolders = () => {
    const [raceFolders, setRaceFolders] = useState<[HomeViewNS.RaceLogProps["RaceLogData"]?]>([])
    useEffect(() => {
        const fetchData = async () =>{
            const data = await fetch("http://localhost:8000/api/getAllRaces")
            const res = await data.json()
            setRaceFolders(res)
        }

        fetchData()
    },[])
    return {
        raceFolders
    }
}
