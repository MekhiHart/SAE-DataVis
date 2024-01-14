import { useLocation } from "react-router-dom"
import { useGetRaceFolderContents } from "../../hooks/useGetRaceFolderContents"
import SubsystemLogsList from "./components/SubsystemLogsList"
export default function Subsytem(){
    const location = useLocation()
    const bucketKey = location.state && location.state.bucketKey
    const raceName = location.state && location.state.raceName
    const {subsystemLogs, setSubsystemLogs} = useGetRaceFolderContents(bucketKey)
    

    return(
        <div>
            <h2>{raceName}</h2>
            <SubsystemLogsList SubsystemListData={subsystemLogs} />
        </div>
    )
}