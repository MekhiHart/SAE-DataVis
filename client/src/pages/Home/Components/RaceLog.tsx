import "../index.css"
import {Link} from "react-router-dom"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faChevronRight, faClock, faCalendar, faSignature, faHashtag, faFlagCheckered} from "@fortawesome/free-solid-svg-icons"
import { Interfaces} from "../../../utils/namespaces/Interfaces"
import {IconDefinition} from "@fortawesome/free-solid-svg-icons"

interface RaceLogProps{
    RaceLogData: Interfaces.IRaceLog
}

export default function RaceLog(props:RaceLogProps){
    const {id, name, date, duration, bucketKey} = props.RaceLogData
    return(
        <Link to="/subsystem" state={{bucketKey: bucketKey, raceName: name}} className="racelog shadows" >
            <Detail icon={faHashtag} content={id} />
            <Detail icon={faFlagCheckered} content={name} />
            <Detail icon={faCalendar} content={date} />
            <Detail icon={faClock} content={duration} isDuration={true} />
            <FontAwesomeIcon icon={faChevronRight}/>
        </Link>
    )
}

interface IDetailProps{
    icon: IconDefinition,
    content: string,
    isDuration?: boolean
}
function Detail(props: IDetailProps) {
    const {icon, content, isDuration} = props
    return(
        <div style={{display:"flex", alignItems:"center"}}>
            <FontAwesomeIcon style={{paddingRight:"10px"}} icon={icon}/>
            <span>{content } {isDuration && " minutes"}</span>
        </div>
    )
}
