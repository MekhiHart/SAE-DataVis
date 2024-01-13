import { Interfaces } from "../../utils/namespaces/Interfaces";

class DBS3Controller{
    async GetRaceFolders(): Promise<Interfaces.IRaceLog["RaceLogData"][]>{
        const data = await fetch("http://localhost:8000/api/getAllRaces")
        const res: Interfaces.IRaceLog["RaceLogData"][] = await data.json()
        return res
    }

    async GetRaceFolderContents(bucketKey: string): Promise<Interfaces.ISubsystem["SubsystemData"][]>{
        const url = "http://localhost:8000/api/getRaceFolderContents/"
        const data = await fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers:{
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({bucket_key:bucketKey})
        })
        const json: Interfaces.ISubsystem["SubsystemData"][] = await data.json()
        return json
    }
}

export const dbs3Controller = new DBS3Controller()

