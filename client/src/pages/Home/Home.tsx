import { useGetRaceFolders } from "../../hooks/useGetRaceFolders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import RaceLogList from "./components/RaceLogList";
export default function Home(){

    const {raceFolders} = useGetRaceFolders()
    return(
        <>
            <div style={{display:"flex"}}>
                <h2 style={{color:"black"}}>Race History</h2>
                <Upload/>
            </div>

            <div className="racelog--container">
                <div className="racelog--header">
                    <h3>Search for Race</h3>
                    <h3 style={{marginLeft:"auto", paddingRight:"25px"}}>Name</h3>
                </div>

                <div className="racelog--description">
                    <h4>ID</h4>
                    <h4>Name</h4>
                    <h4>Date</h4>
                    <h4>Duration</h4>
                </div>

                <div id="race--history--body">
                    <RaceLogList RaceLogListData={raceFolders} />
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