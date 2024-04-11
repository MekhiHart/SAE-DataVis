import "../index.css"
import { SetStateAction } from "react"
interface InputFieldProps{
    name: String
    fieldValue: [string | number, React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<number>>]
    fieldType: string
}

export default function InputField(props:InputFieldProps){
    const name = props.name
    const fieldType = props.fieldType
    let [fieldValue, setFieldValue] = props.fieldValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = fieldType === 'number' ? parseFloat(e.target.value) : e.target.value;
        setFieldValue(newValue as SetStateAction<string> & SetStateAction<number>);
    };

    return(
        <div className="flex fieldbox--parent" >
            <h3>{name}</h3>
            <input className="fieldbox--body" type={fieldType} value={fieldValue} onChange={handleChange}/>
        </div>
    )
}