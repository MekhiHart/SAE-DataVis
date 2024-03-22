import {Link} from "react-router-dom"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
export default function UploadButton(){
    return(
        <Link to="upload" id="upload--button">
            <h4>Upload Race</h4>
            <FontAwesomeIcon size="2x" style={{color:"black", marginLeft:"10", scale:"75%"}} icon={faFileArrowUp} />
        </Link>
    )
}