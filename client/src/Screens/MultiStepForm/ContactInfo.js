import React from 'react'
import { Form } from 'react-bootstrap'
import { FormTitle } from './FormTitle';

export const ContactInfo = ({formData,setFormData}) => {
    const handleChange =(e)=>{
        const {name,value} = e.target; 
        setFormData({...formData, [name]: value})
    }
  return (
    <FormTitle title="Business Info">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Business Name*</Form.Label>
        <Form.Control
          required
          name="businessname"
          type="text"
          onChange={handleChange}
            value={formData.businessname}
          placeholder="Enter Business Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Website (Optional)</Form.Label>
        <Form.Control
          name="website"
          type="text"
          onChange={handleChange}
          value={formData.website}
          placeholder="https://my-website.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description*</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          onChange={handleChange}
          value={formData.description}
          placeholder="Description"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone*</Form.Label>
        <Form.Control
          name="phone"
          type="tel"
          onChange={handleChange}
          value={formData.phone}
          placeholder="Add Phone Number"
        />
      </Form.Group>
      </Form>
    </FormTitle>
  );
}
