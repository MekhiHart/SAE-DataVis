import { HomeViewNS } from "../../utils/namespace/HomeNS";

export class dbs3Controller{
    async GetRaceFolders(): Promise<HomeViewNS.RaceLogProps[]>{
        const data = await fetch("http://localhost:8000/api/getAllRaces")
        const res: HomeViewNS.RaceLogProps[] = await data.json()
        return res
    }
}

