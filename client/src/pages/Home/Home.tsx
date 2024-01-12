import { useGetRaceFolders } from "../../hooks/useGetRaceFolders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import RaceLogList from "./components/RaceLogList";
export default function Home(){

    const {raceFolders} = useGetRaceFolders()
    return(
        <>
            <div style={{display:"flex"}}>
                <h2 style={{color:"black"}}>Race Logs</h2>
                <Upload/>
            </div>
            <RaceLogList RaceLogListData={raceFolders} />
        </>
    )
}

const Upload = () =>{
    return(
    <div style={{display:"flex", color:"black", alignItems:"center", marginLeft:"auto"}}>
        <FontAwesomeIcon size="2x" style={{color:"black", marginRight:"10", scale:"75%"}} icon={faFileArrowUp} />
        <h4>Upload Race</h4>
    </div>
    )

}