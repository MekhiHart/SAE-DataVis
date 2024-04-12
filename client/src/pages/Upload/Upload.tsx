import { useState} from "react";
import axios from 'axios';

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

    const [files, setFiles] = useState([]);

    
    function handleFileChange(event: React.ChangeEvent<HTMLElement>) {

        // * going from HTMLElement --> HTMLFormElement to access 'files' attribute 
        if (event.target && event.target.tagName === 'FORM') {
            // This is a form element
            const formChangeEvent = event as React.ChangeEvent<HTMLFormElement>;
            const files = formChangeEvent.target.files

            if (files){
                setFiles([...files] as never[]);
            }

            else{
                //TODO add error handling if files is null
            }
        }

        else{ // invalid submission
            // TODO add error handling if submission fails
        }
    } // handleFileChange
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = 'http://localhost:3000/uploadFiles'; //TODO change url later
    const formData = new FormData();
    files.forEach((file, index) => {
        formData.append(`file${index}`, file);
    })

    const config = {
        headers: {
        'content-type': 'multipart/form-data',
        },
    }

    axios.post(url, formData, config)
        .then((response) => {
        console.log(response.data);
        })
        .catch((error) => {
        console.error("Error uploading files: ", error);
        })
      } // handleSubmit

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

            <form onSubmit={handleSubmit}>
                <h3>Submit Race</h3>
                <input type="file" multiple onChange={handleFileChange}/>
                <button type="submit">Upload</button>
            </form>
        </>

    )
}