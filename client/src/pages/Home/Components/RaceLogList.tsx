import { HomeViewNS } from "../../../utils/namespace/HomeNS"
import RaceLog from "./RaceLog"

interface RaceLogListProps{
    RaceLogListData: HomeViewNS.RaceLog["RaceLogData"][]
}
export default function RaceLogList(props:RaceLogListProps){
    const raceFolders = props.RaceLogListData

    return(
        <div>
            {raceFolders.map((obj) => obj && <RaceLog key={obj.id} RaceLogData={obj}/>)}
        </div>
    )
}