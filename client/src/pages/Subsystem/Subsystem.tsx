import { useLocation } from "react-router-dom"
export default function Subsytem(){
    const location = useLocation()
    const bucketKey = location.state && location.state.bucketKey
    return(
        <div>
            <h2>{bucketKey}</h2>
            <h2>Subsytem Page</h2>
            <h2>Subsytem Page</h2>
            <h2>Subsytem Page</h2>
            <h2>Subsytem Page</h2>
        </div>
    )
}