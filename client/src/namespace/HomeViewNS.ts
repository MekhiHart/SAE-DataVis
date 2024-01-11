import {IconDefinition} from "@fortawesome/free-solid-svg-icons"

export namespace HomeViewNS{
    export interface RaceLogProps{
        RaceLogData:{
            id: string,
            name: string,
            date: string,
            duration: string,
            bucketKey: string
        }
    }
    
    export interface IDetailProps{
        icon: IconDefinition,
        content: string,
        isDuration?: boolean
        
    }
}