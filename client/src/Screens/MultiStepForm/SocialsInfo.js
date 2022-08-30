import React from 'react'
import { Form } from 'react-bootstrap';
import { FormTitle } from './FormTitle';

export const SocialsInfo = ({formData,setFormData}) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  return (
    <FormTitle title="Socials">

        <Form>
        <Form.Group className="mb-3" controlId="formBasicInstagram">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
            name="instagram"
            type="text"
            onChange={handleChange}
            //   value={regInfo.password}
            placeholder="https://instagram.com/"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLinkedin">
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
            name="linkedin"
            type="text"
            onChange={handleChange}
            //   value={regInfo.password}
            placeholder="https://linkedin.com/in/"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFacebook">
            <Form.Label>Facebook</Form.Label>
            <Form.Control
            name="facebook"
            type="text"
            onChange={handleChange}
            //   value={regInfo.password}
            placeholder="https://facebook.com/"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTwitter">
            <Form.Label>Twitter</Form.Label>
            <Form.Control
            name="twitter"
            type="text"
            onChange={handleChange}
            //   value={regInfo.password}
            placeholder="https://twitter.com/"
            />
        </Form.Group>
        </Form>
    </FormTitle>
  );
}
