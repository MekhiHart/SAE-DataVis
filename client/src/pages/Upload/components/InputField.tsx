interface InputFieldProps{
    name: String
    fieldValue: [string, React.Dispatch<React.SetStateAction<string>>]
}


export default function InputField(props:InputFieldProps){
    const name = props.name
    let [fieldValue, setFieldValue] = props.fieldValue

    return(
        <div>
            <h3>{name}</h3>
            <input type="text" value={fieldValue} onChange={(e) => setFieldValue(e.target.value)}/>
        </div>
    )
}