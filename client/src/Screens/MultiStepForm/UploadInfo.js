import React from 'react'
import { Form } from 'react-bootstrap';
import { FormTitle } from './FormTitle';

export const UploadInfo = ({formData,setFormData}) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  return (
    <FormTitle title="Upload Your Business Images">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Upload Images</Form.Label>
            <Form.Control
            name="pics"
            type="file"
            onChange={handleChange}
            placeholder="choose file"
            />
        </Form.Group>
        </Form>
    </FormTitle>
  );
}
