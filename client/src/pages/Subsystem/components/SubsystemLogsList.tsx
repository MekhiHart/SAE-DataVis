import { Interfaces } from "../../../utils/namespaces/Interfaces";
import SubsystemCard from "./SubsystemCard";

interface SubsystemListProps{
    SubsystemListData: Interfaces.ISubsystem["SubsystemData"][]
}
export default function SubsystemLogsList(props: SubsystemListProps){
    const subsystemLogs = props.SubsystemListData
    const test ={ 
        subsystem: "Rear diff",
        key: "key"
    }
    return(
        <div>
            {subsystemLogs.map(obj => <SubsystemCard key={obj.key} SubsystemCardData={obj}/>)}
        </div>
    )
    

}