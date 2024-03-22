import { Interfaces } from "../../utils/namespaces/Interfaces";

const rootUrl = import.meta.env.VITE_ROOT_SERVER
class DBS3Controller{
    async GetRaceFolders(): Promise<Interfaces.IRaceLog[]>{
        const api = "getAllRaces"
        const url = rootUrl + api
        const data = await fetch(url)
        const res: Interfaces.IRaceLog[] = await data.json()
        return res
    }

    async GetRaceFolderContents(bucketKey: string): Promise<Interfaces.ISubsystem[]>{
        const api = "getRaceFolderContents"
        const url = rootUrl + api
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
        const json: Interfaces.ISubsystem[] = await data.json()
        return json
    }

    async GetAnalysisData(bucketKey: string): Promise<Interfaces.IAnalysisJSON>{
        const api = "getGraphJSON"
        const url = rootUrl + api
        const data = await fetch(url,{
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
        const json: Interfaces.IAnalysisJSON = await data.json()
        return json
    }
}

export const dbs3Controller = new DBS3Controller()

