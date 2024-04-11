import { useState, useEffect } from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
import InputField from "./components/InputField";
export default function Upload(){
    const [fieldValue, setFieldValue] = useState<string>("")
    useEffect(() => {
        console.log(fieldValue)
    }, [fieldValue])
    return(
        <>
            <div style={{display: "flex", alignItems:"center"}}>
                <FontAwesomeIcon size="2x" style={{color:"black", marginRight:"10", scale:"75%"}} icon={faFileArrowUp} />
                <h2>Upload Race File</h2>
            </div>

            <InputField name={"Hello"} fieldValue={[fieldValue,setFieldValue]}/>

            


        </>

    )
}