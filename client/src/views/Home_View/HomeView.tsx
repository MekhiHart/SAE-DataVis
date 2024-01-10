import RaceLog from "./Components/RaceLog";
export default function HomeView(){
    const data = {
        id: "12",
        name: "Helo",
        date: new Date(Date.now()).toLocaleDateString(),
        time: "60",
    }
    return(
        <RaceLog RaceLogData={data}/>
    )
}