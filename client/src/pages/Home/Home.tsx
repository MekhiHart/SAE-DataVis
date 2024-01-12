import { useGetRaceFolders } from "../../hooks/useGetRaceFolders";
import RaceLogList from "./Components/RaceLogList";
export default function HomeView(){

    const {raceFolders} = useGetRaceFolders()
    return(
        <>
            <RaceLogList RaceLogListData={raceFolders} />
        </>
    )
}