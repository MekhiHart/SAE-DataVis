import { Outlet } from "react-router-dom"
export default function Layout(){
    return (
        <div>
            <div style={{backgroundColor:"aqua"}}>Nav Bar</div>
            <Outlet/>
        </div>
    )
}