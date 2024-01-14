import "../index.css"
import SubsystemIcon from "../../../components/SubsystemIcon"
import { Interfaces } from "../../../utils/namespaces/Interfaces"
import { Link } from "react-router-dom"
interface SubsystemCardProps{
    SubsystemCardData: Interfaces.ISubsystem["SubsystemData"]
}
export default function SubsystemCard(props:SubsystemCardProps){
    const {subsystem, key} = props.SubsystemCardData
    return(
        <Link to="/analysis" state={{bucketKey: key, subsystemName: subsystem}} className="subsystem--card shadows">
            <SubsystemIcon subsystemName={subsystem} />
            <h4 className="subsystem--title">{subsystem}</h4>
        </Link>
    )
}

