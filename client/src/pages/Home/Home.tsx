import { useGetRaceFolders } from "../../hooks/useGetRaceFolders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileArrowUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import RaceLogList from "./components/RaceLogList";

import { useState } from "react";
export default function Home(){

    const {raceFolders} = useGetRaceFolders()
    const [search, setSearch] = useState("")

    return(
        <>
            <div className="flex">
                <h2>Race History</h2>
                <Upload/>
            </div>

            <div className="racehistory--container">
                <div className="racehistory--header">
                    <span id="racehistory--search">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <input value={search} onChange={(event) => setSearch(event.target.value) } type="text" placeholder="Search Race"/>
                    </span>
                    <h4 style={{marginLeft:"auto", paddingRight:"25px"}}>Name</h4>
                </div>

                <div className="racehistory--description">
                    <h4>ID</h4>
                    <h4>Name</h4>
                    <h4>Date</h4>
                    <h4>Duration</h4>
                </div>

                <div id="racehistory--body">
                    <RaceLogList RaceLogListData={
                        raceFolders.filter((raceFolder) => {
                            return search.toLowerCase() === "" 
                                ? true
                                : raceFolder.name.toLowerCase().includes(search.toLowerCase()) || raceFolder.date.includes(search)
                        })
                    } />
                </div>
            </div>

        </>
    )
}



const Upload = () =>{
    return(
    <div style={{display:"flex", color:"black", alignItems:"center", marginLeft:"auto"}}>
        <h4>Upload Race</h4>
        <FontAwesomeIcon size="2x" style={{color:"black", marginLeft:"10", scale:"75%"}} icon={faFileArrowUp} />
    </div>
    )

}