import saeIcon from "../../../assets/SAEIcon.png"
export default function NavBar(){
    return(
        <div id="navbar">
            <img id="website--icon" src={saeIcon} />
            <h2 id="website--title">SAE Data Visualizer</h2>
        </div> 
    )
}