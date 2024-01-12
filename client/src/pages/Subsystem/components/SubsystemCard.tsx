import "../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { Interfaces } from "../../../utils/namespaces/Interfaces"

interface SubsystemCardProps{
    SubsystemCardData: Interfaces.ISubsystem["SubsystemData"]
}
export default function SubsystemCard(props:SubsystemCardProps){
    const {subsystem, key} = props.SubsystemCardData
    return(
        <div className="subsystem--card">
            <FontAwesomeIcon icon={faGear} size="2x" className="subsystem--icon"/>
            <h3 style={{marginTop:"auto", alignSelf:"center"}}>{subsystem}</h3>
        </div>
    )
}