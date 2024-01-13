import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Graph(){
    const location = useLocation()
    const [graphData, setGraphData] = useState()
    const bucketKey = location.state && location.state.bucketKey


    useEffect(() => {
        const fetchData = async () =>{
            const url = "http://localhost:8000/api/getGraphJSON/"
            const data = await fetch(url,{
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
            console.log("data: ", json)
        }
        fetchData()
    },[])
    return(
        <div>
            <h2>{bucketKey}</h2>
        </div>
    )
}