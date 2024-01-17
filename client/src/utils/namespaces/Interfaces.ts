export namespace Interfaces{
    export interface IRaceLog{
        id: string,
        name: string,
        date: string,
        duration: string,
        bucketKey: string
    }

    export interface ISubsystem{
        subsystem: string,
        key: string
    }

    export interface IAnalysis{
        subsystem: string,
        data: {
            id: string,
            year: string,
            userGain: number,
            userLost: number

        }[]
    }

    export interface IChart {
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