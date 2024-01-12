import "../index.css"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faGear, faPause, faBone, faCar, faSort, faGears, faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { Interfaces } from "../../../utils/namespaces/Interfaces"

interface SubsystemCardProps{
    SubsystemCardData: Interfaces.ISubsystem["SubsystemData"]
}
export default function SubsystemCard(props:SubsystemCardProps){
    const {subsystem, key} = props.SubsystemCardData
    return(
        <div className="subsystem--card">
            <SubsystemIcon subsystemName={subsystem} />
            <h4 style={{marginTop:"auto", alignSelf:"center"}}>{subsystem}</h4>
        </div>
    )
}

function SubsystemIcon(props: {subsystemName: string}){
    let icon: FontAwesomeIconProps["icon"]
    switch (props.subsystemName){
        case "brakes":
            icon = faPause
            break
        case "chassis":
            icon = faBone
            break

        case "drive train":
            icon = faCar
            break
        
        case "front suspension":
            icon = faSort
            break
        
        case "rear diff":
            icon = faGears
            break

        case "rear suspension":
            icon = faSort
            break

        case "steering":
            icon = faCircleNotch
            break
        default:
            icon = faGear
            break
    }

    return <FontAwesomeIcon icon={icon} size="2x" className="subsystem--icon"/>
}