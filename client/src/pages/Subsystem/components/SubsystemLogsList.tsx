import { Interfaces } from "../../../utils/namespaces/Interfaces";

interface SubsystemListProps{
    SubsystemListData: Interfaces.ISubsystem["SubsystemData"][]
}
export default function SubsystemLogsList(props: SubsystemListProps){
    const subsystemLogs = props.SubsystemListData
    
    return(
        <div>
            {subsystemLogs.map(obj => <div key={obj.subsystem}> {obj.subsystem}</div>)}
        </div>
    )
    

}