import "../index.css"
interface InputFieldProps{
    name: String
    fieldValue: [string, React.Dispatch<React.SetStateAction<string>>]
}

export default function InputField(props:InputFieldProps){
    const name = props.name
    let [fieldValue, setFieldValue] = props.fieldValue

    return(
        <div className="flex fieldbox--parent" >
            <h3>{name}</h3>
            <input className="fieldbox--body" type="text" value={fieldValue} onChange={(e) => setFieldValue(e.target.value)}/>
        </div>
    )
}