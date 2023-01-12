import React from 'react'
import { Form } from 'react-bootstrap'


type formprops = {
    label : string;
    type:string;
    placeholder:string;
    error?:boolean;
    errormessage?:string;
    register?:any;
    defaultValue?:string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;


}

function FormComponent({errormessage,placeholder,defaultValue,type,error,label,register,onChange = ()=>{}}:formprops) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control  onChange={onChange} {...register} type={type} defaultValue={defaultValue}  placeholder={placeholder} />
        {
          errormessage &&
             <p style={{marginTop:'5px',fontSize:'12px',color:'red'}}> *{errormessage}* </p>
        }
      </Form.Group>
    </div>
  )
}

export default FormComponent
