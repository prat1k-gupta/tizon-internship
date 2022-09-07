import React from 'react'
import { FormTitle } from './FormTitle'

export const ConfirmSubmission = ({formData,setFormData}) => {
    console.log(formData)
  return (
    <FormTitle title="Confirm Your Business">
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>Business Name</span> : <span>{formData.businessname}</span></div>
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>description</span> : <span>{formData.description}</span></div>
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>phone</span> : <span>{formData.phone}</span></div>
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>website</span> : <span>{formData.website}</span></div>
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>facebook</span> : <span>{formData.facebook}</span></div>
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>instagram</span> : <span>{formData.instagram}</span></div>
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>linkedin</span> : <span>{formData.linkedin}</span></div>
        <div style={{overflow:"hidden"}}><span style={{textTransform: "capitalize"}}>twitter</span> : <span>{formData.twitter}</span></div>
    </FormTitle>
  );
}
