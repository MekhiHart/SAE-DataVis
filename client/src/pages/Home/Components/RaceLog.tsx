import "../index.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faChevronRight, faClock, faCalendar, faSignature, faHashtag} from "@fortawesome/free-solid-svg-icons"
import { HomeViewNS } from "../../../utils/namespace/HomeNS"
import {IconDefinition} from "@fortawesome/free-solid-svg-icons"


export default function RaceLog(props:HomeViewNS.RaceLog){
    const {id, name, date, duration} = props.RaceLogData
    return(
        <div className="racelog">
            <Detail icon={faHashtag} content={id} />
            <Detail icon={faSignature} content={name} />
            <Detail icon={faCalendar} content={date} />
            <Detail icon={faClock} content={duration} isDuration={true} />
            <FontAwesomeIcon icon={faChevronRight} onClick={() => console.log("Hello")}/>
        </div>
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
