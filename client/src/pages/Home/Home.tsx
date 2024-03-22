import { useGetRaceFolders } from "../../hooks/useGetRaceFolders";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";

import RaceLogList from "./components/RaceLogList";
import UploadButton from "./components/UploadButton"

import {useState } from "react";
export default function Home(){

    const {raceFolders, raceFoldermModifier} = useGetRaceFolders()
    const [search, setSearch] = useState("")
    
    return(
        <>
            <div className="flex">
                <h3>Race History</h3>
            </div>

            <div className="racehistory--container">
                <div className="racehistory--header">
                    <span id="racehistory--search">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <input value={search} onChange={(event) => setSearch(event.target.value) } type="text" placeholder="Search Race"/>
                    </span>
                    <UploadButton/>
                </div>
                
                <div className="racehistory--description">
                    <h4>ID</h4>
                    <Sort name="Name" onClick={() => raceFoldermModifier.SortByName()} />
                    <Sort name="Date" onClick={() => raceFoldermModifier.SortByDate()}/>
                    <Sort name="Duration" onClick={() => raceFoldermModifier.SortByDuration()}/>
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

interface SortProps{
    name: string
    onClick: () => void
}
const Sort = (props: SortProps) => {
    return(
        <div onClick={props.onClick} className="flex" style={{alignItems:"center", cursor:"pointer"}}>
            <h4 style={{paddingRight:"7px"}}>{props.name}</h4>
            <FontAwesomeIcon icon={faSort} size={"sm"} />
        </div>
        
    )
}
