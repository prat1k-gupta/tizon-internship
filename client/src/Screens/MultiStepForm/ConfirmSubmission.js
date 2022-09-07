import React from 'react'
import { FormTitle } from './FormTitle'

export const ConfirmSubmission = ({formData,setFormData}) => {
    console.log(formData)
  return (
    <FormTitle title="Confirm Your Business">
      <span>Business Name: {formData.businessname}</span>
    </FormTitle>
  );
}
