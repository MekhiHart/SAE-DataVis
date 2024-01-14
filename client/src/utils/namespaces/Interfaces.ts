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
                id: string,
                year: string,
                userGain: number,
                userLost: number

            }[]
        }
    }

    export interface IChart {
        ChartData:{
            data: {
                labels: string[];
                datasets: {
                  label: string;
                  data: number[];
                  backgroundColor: string[];
                  borderColor: string,
                  borderWidth: number
                }[];
              };
        }

      }

    
    
}