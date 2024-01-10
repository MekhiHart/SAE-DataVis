import "../index.css"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faChevronRight, faClock, faCalendar, faCar, faSignature, faHashtag, IconDefinition} from "@fortawesome/free-solid-svg-icons"

interface RaceLogProps{
    RaceLogData:{
        id: string,
        name: string,
        date: string,
        time: string,
    }
}

interface IDetailProps{
    icon: IconDefinition,
    content: string,
    isTime?: boolean
    
}

export default function RaceLog(props:RaceLogProps){
    const {id, name, date, time} = props.RaceLogData
    return(
        <div className="racelog">
            <Detail icon={faHashtag} content={id} />
            <Detail icon={faSignature} content={name} />
            <Detail icon={faCalendar} content={date} />
            <Detail icon={faClock} content={time} isTime={true} />
            <FontAwesomeIcon icon={faChevronRight} onClick={() => console.log("Hello")}/>
        </div>
    )
}

function Detail(props: IDetailProps) {
    const {icon, content, isTime} = props
    return(
        <div style={{display:"flex", alignItems:"center"}}>
            <FontAwesomeIcon style={{paddingRight:"10px"}} icon={icon}/>
            <span>{content } {isTime && " minutes"}</span>
        </div>
    )
}
