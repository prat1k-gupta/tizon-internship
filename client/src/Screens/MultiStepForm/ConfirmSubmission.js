import React from 'react'
import { FormTitle } from './FormTitle'

export const ConfirmSubmission = ({formData,setFormData}) => {
    console.log(formData)
  return (
    <FormTitle title="Confirm Your Business">
      <ul>
        {
            Object.keys(formData).map((keyName, i) => (
                <li className="travelcompany-input" key={i}>
                <span className="input-label">
                    {keyName} : {formData[keyName]}
                </span>
                </li>
            ))
        }
      </ul>
    </FormTitle>
  );
}
