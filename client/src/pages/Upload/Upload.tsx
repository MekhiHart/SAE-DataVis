import { useState, useEffect } from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";

import InputField from "./components/InputField";


import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // default css for Calendar Component

// Required types for Calendar Component
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Upload(){
    const [raceName, setRaceName] = useState<string>("")
    const [raceDate, setRaceDate] = useState<Value>(new Date())
    const [raceDuration, setRaceDuration] = useState<number>(0)

    return(
        <>
            <div style={{display: "flex", alignItems:"center"}}>
                <FontAwesomeIcon size="2x" style={{color:"black", marginRight:"10", scale:"75%"}} icon={faFileArrowUp} />
                <h2>Upload Race File</h2>
            </div>

            <InputField name={"Race Name"} fieldValue={[raceName,setRaceName]} fieldType="text"/>
            <InputField name={"Race Duration"} fieldValue={[raceDuration, setRaceDuration]} fieldType="number"/>

            <div >
                <h3>Race Date</h3>
                <Calendar onChange={setRaceDate} value={raceDate} />
            </div>
            

        </>

    )
}