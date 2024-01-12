import { useGetRaceFolders } from "../../hooks/useGetRaceFolders";
import RaceLogList from "./components/RaceLogList";
export default function HomeView(){

    const {raceFolders} = useGetRaceFolders()
    return(
        <>
            <h2 style={{color:"black"}}>Race Logs</h2>
            <RaceLogList RaceLogListData={raceFolders} />
        </>
    )
}