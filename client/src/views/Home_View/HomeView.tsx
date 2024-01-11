import RaceLog from "./Components/RaceLog";
import { HomeViewNS } from "../../namespace/HomeViewNS";
import { useEffect, useState } from "react";
export default function HomeView(){
    const data = {
        id: "12",
        name: "Helo",
        date: new Date(Date.now()).toLocaleDateString(),
        duration: "60",
    }

    const [raceFolders, setRaceFolders] = useState<[HomeViewNS.RaceLogProps["RaceLogData"]?]>([])
    useEffect(() => {
        const fetchData = async () =>{
            const data = await fetch("http://localhost:8000/api/getAllRaces")
            const res = await data.json()
            setRaceFolders(res)
        }

        fetchData()
    },[])
    return(
        <>
            {raceFolders.map((obj) => obj && <RaceLog RaceLogData={obj}/>)}
        </>
    )
}