import { faUpload } from "@fortawesome/free-solid-svg-icons"
import saeIcon from "../../../assets/SAEIcon.png"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function NavBar(){
    return(
        <div id="navbar">
            <img id="website--icon" src={saeIcon} />
            <h2 id="website--title">SAE Race Data Visualizer</h2>
        </div> 
    )
}
