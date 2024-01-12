import { useLocation } from "react-router-dom"
import { useGetRaceFolderContents } from "../../hooks/useGetRaceFolderContents"

export default function Subsytem(){
    const location = useLocation()
    const bucketKey = location.state && location.state.bucketKey
    const {subsytemLogs, setSubsystemLogs} = useGetRaceFolderContents(bucketKey)


    return(
        <div>
            <h2>{bucketKey}</h2>
            {subsytemLogs.map(obj => <div key={obj.subsystem}> {obj.subsystem }</div>)}
        </div>
    )
}