import { HomeViewNS } from "../../utils/namespace/HomeNS";

class DBS3Controller{
    async GetRaceFolders(): Promise<HomeViewNS.RaceLog["RaceLogData"][]>{
        const data = await fetch("http://localhost:8000/api/getAllRaces")
        const res: HomeViewNS.RaceLog["RaceLogData"][] = await data.json()
        return res
    }
}

export const dbs3Controller = new DBS3Controller()

