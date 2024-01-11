import RaceLog from "./Components/RaceLog";

import { useEffect, useState } from "react";
export default function HomeView(){
    const data = {
        id: "12",
        name: "Helo",
        date: new Date(Date.now()).toLocaleDateString(),
        duration: "60",
    }

    const [raceFolders, setRaceFolders] = useState<RaceLogProps>([])
    useEffect(() => {
        const fetchData = async () =>{
            const data = await fetch("http://localhost:8000/api/getAllRaces")
            const res = await data.json()
            setRaceFolders(res)
        }

        fetchData()
    })
    return(
        {}
    )
}