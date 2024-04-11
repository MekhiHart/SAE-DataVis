import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
export default function Upload(){

    return(
        <span style={{display: "flex", alignItems:"center"}}>
            <FontAwesomeIcon size="2x" style={{color:"black", marginRight:"10", scale:"75%"}} icon={faFileArrowUp} />
            <h2>Upload Race File</h2>
        </span>
    )
}