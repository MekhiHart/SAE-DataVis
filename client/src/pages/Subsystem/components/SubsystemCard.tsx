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
            <h4 className="subsystem--title">{subsystem}</h4>
        </div>
    )
}

function SubsystemIcon(props: {subsystemName: string}){
    let icon: FontAwesomeIconProps["icon"]
    switch (props.subsystemName){
        case "Brakes":
            icon = faPause
            break
        case "Chassis":
            icon = faBone
            break

        case "Drive train":
            icon = faCar
            break
        
        case "Front suspension":
            icon = faSort
            break
        
        case "Rear diff":
            icon = faGears
            break

        case "Rear suspension":
            icon = faSort
            break

        case "Steering":
            icon = faCircleNotch
            break
        default:
            icon = faGear
            break
    }

    return <FontAwesomeIcon icon={icon} size="2x" className="subsystem--icon"/>
}