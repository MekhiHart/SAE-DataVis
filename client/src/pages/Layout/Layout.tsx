import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

export default function Layout(){
    return (
        <div >
            <NavBar/>

            <div id="layout">
                <Outlet/>
            </div>
            
        </div>
    )
}