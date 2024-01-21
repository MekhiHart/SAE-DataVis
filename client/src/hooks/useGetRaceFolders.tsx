import { useEffect, useState } from "react"
import { Interfaces } from "../utils/namespaces/Interfaces";
import { dbs3Controller } from "../services/api/dbs3Controller";

export const useGetRaceFolders = () => {
    const [raceFolders, setRaceFolders] = useState<Interfaces.IRaceLog[]>([])

    class RaceFolderModifier{

        SortByName(){
            setRaceFolders((prev) => {
                const temp = [...prev].sort((a,b) => a.name.localeCompare(b.name))
                return temp
            })
        }
    } // RaceFolderModifier

    const raceFoldermModifier = new RaceFolderModifier()

    
    useEffect(() => {
        const fetchData = async () =>{
            const data = await dbs3Controller.GetRaceFolders()
            setRaceFolders(data)
        }

        fetchData()
    },[]) // useEffect

    return {
        raceFolders, raceFoldermModifier 
    }
}
