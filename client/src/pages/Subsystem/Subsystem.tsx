import { useLocation } from "react-router-dom"
import { useGetRaceFolderContents } from "../../hooks/useGetRaceFolderContents"
import SubsystemLogsList from "./components/SubsystemLogsList"
import SubsystemCard from "./components/SubsystemCard"
export default function Subsytem(){
    const location = useLocation()
    const bucketKey = location.state && location.state.bucketKey
    const {subsytemLogs, setSubsystemLogs} = useGetRaceFolderContents(bucketKey)


    return(
        <div>
            <h2>{bucketKey}</h2>
            <SubsystemLogsList SubsystemListData={subsytemLogs} />
        </div>
    )
}