import React from 'react'
import './LabelledInput.css';

type LabelledInputProps = {
    type: string;
    id: string;
    label: string;
    errorMsg: string | undefined;
    register: any;
    selectOptions?: string[];
};

const LabelledInput = ({type, id, label, errorMsg, register, selectOptions}: LabelledInputProps) => {
  
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        { type === "select" 
          ? <select className="field text-capitalize" id={id} {...register(id)}>
              {selectOptions?.map((option) => (
                <option key={option} value={option} className='text-capitalize'>{option}</option>
              ))}
            </select>
          : <input type={type} className="field" id={id} {...register(id)} />
        }
        
        {errorMsg && <p className="text-danger small mt-1">{errorMsg}</p>}
    </div>
  )
}

export default LabelledInput
