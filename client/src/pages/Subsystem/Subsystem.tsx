import { useLocation } from "react-router-dom"
import { useGetRaceFolderContents } from "../../hooks/useGetRaceFolderContents"
import SubsystemLogsList from "./components/SubsystemLogsList"
export default function Subsytem(){
    const location = useLocation()
    const bucketKey = location.state && location.state.bucketKey
    const {subsystemLogs, setSubsystemLogs} = useGetRaceFolderContents(bucketKey)
    console.log("sub: ", subsystemLogs)

    return(
        <div>
            <h2>{bucketKey}</h2>
            <SubsystemLogsList SubsystemListData={subsystemLogs} />
        </div>
    )
}