import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faGear, faPause, faBone, faCar, faSort, faGears, faCircleNotch, faDharmachakra } from "@fortawesome/free-solid-svg-icons"
import "./index.css"
// TODO Need to make this an ENUM type
export default function SubsystemIcon(props: {subsystemName: string}){
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
            icon = faDharmachakra
            break
        default:
            icon = faGear
            break
    }

    return <FontAwesomeIcon icon={icon} size="2x" className="subsystem--icon"/>
}