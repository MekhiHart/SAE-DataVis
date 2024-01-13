import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Graph(){
    const location = useLocation()
    const [graphData, setGraphData] = useState()

    useEffect(() => {
        const fetchData = () =>{
            const data = fetch()
        }
    },[])
    const bucketKey = location.state && location.state.bucketKey
    return(
        <div>
            <h2>{bucketKey}</h2>
        </div>
    )
}