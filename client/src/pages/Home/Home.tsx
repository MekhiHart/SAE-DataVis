import RaceLog from "./Components/RaceLog";
import { useGetRaceFolders } from "../../hooks/useGetRaceFolders";
export default function HomeView(){

    const {raceFolders} = useGetRaceFolders()
    return(
        <>
            {raceFolders.map((obj) => obj && <RaceLog RaceLogData={obj}/>)}
        </>
    )
}