import saeIcon from "../../../assets/SAEIcon.png";
import "../index.css";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const divStyle: React.CSSProperties = {
        cursor: 'pointer', // Set cursor to hand pointer
        width: '30%',
        borderRadius: '6px',
        backgroundColor: 'lightblue',
    };

    return (
        <div id="navbar" onClick={() => { navigate("/"); }} style={divStyle}>
            <img id="website--icon" src={saeIcon} onClick={() => { navigate("/"); }} />
            <h2 id="website--title" onClick={() => { navigate("/"); }}>SAE Race Data Visualizer</h2>
        </div>
    )
}
