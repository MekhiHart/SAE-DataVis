export namespace Interfaces{
    export interface IRaceLog{
        RaceLogData:{
            id: string,
            name: string,
            date: string,
            duration: string,
            bucketKey: string
        }
    }

    export interface ISubsystem{
        SubsystemData:{
            subsystem: string,
            key: string
        }
    }

    export interface IGraph{
        GraphData:{
            subsystem: string,
            data: {
                id: number,
                year: number,
                userGain: number,
                userLost: number

            }[]
        }
    }

    
    
}