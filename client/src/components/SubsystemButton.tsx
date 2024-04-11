import { useState, useEffect } from "react"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SubsystemIcon from "../components/SubsystemIcon";


export const SubsystemButton = (props: {subsystemName: string, onClick: React.Dispatch<React.SetStateAction<{[subsystemName: string]: boolean}>>}) => {
    const {subsystemName, onClick} = props
    const [isClicked, setIsClicked] = useState(false)
  
    useEffect(() => {
      onClick((prev) => {
        const temp = {...prev}
        temp[subsystemName] = !temp[subsystemName]
        return temp
      })
    }, [isClicked])
  
    return(
      <div className="flex subsystem--button" style={{backgroundColor: isClicked? "#98CCFC" : "#def0ff"}} onClick={() => setIsClicked(prev => !prev)}>
        {isClicked ? <FontAwesomeIcon id="subsystem--check--icon" icon={faCheck}/> : <SubsystemIcon subsystemName={subsystemName}/>}
        <h4 className="subsystem--button--name" >{subsystemName}</h4>
      </div>
    )
  }