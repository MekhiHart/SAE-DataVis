import { useLocation } from "react-router-dom";
export default function Graph(){
    const location = useLocation()
    const bucketKey = location.state && location.state.bucketKey
    return(
        <div>
            <h2>{bucketKey}</h2>
        </div>
    )
}