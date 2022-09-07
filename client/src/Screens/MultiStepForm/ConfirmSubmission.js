import React from 'react'
import { FormTitle } from './FormTitle'

export const ConfirmSubmission = ({formData,setFormData}) => {
    console.log(formData)
  return (
    <FormTitle title="Confirm Your Business">
        {
            Object.keys(formData).map((keyName, i) => (
                <div className="travelcompany-input" key={i}>
                <span style={{textTransform: "capitalize"}}>{keyName}</span> : <span>{formData[keyName]}</span>
                </div>
            ))
        }
    </FormTitle>
  );
}
