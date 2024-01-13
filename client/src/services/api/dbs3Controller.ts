import { Interfaces } from "../../utils/namespaces/Interfaces";

class DBS3Controller{
    async GetRaceFolders(): Promise<Interfaces.IRaceLog["RaceLogData"][]>{
        const data = await fetch("http://localhost:8000/api/getAllRaces")
        const res: Interfaces.IRaceLog["RaceLogData"][] = await data.json()
        return res
    }
}

export const dbs3Controller = new DBS3Controller()

