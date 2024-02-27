import { Field } from "formik";

export default function CheckboxField(props:checkBoxField){
    return(
        <div className="mb-3 form-check">
            <Field className='form-check-input' id={props.field} name={props.field} type="checkbox"/>
            <label htmlFor={props.field}>{props.displayName}</label>
        </div>
    )
}

interface checkBoxField{
    displayName:string;
    field:string;
}