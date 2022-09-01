import React from 'react'
import { Form } from 'react-bootstrap';
import { ActiveButton } from '../../main/Inputs';

export const Connect = () => {
    const handleChange = (e)=>{
        console.log(e.target.value)
    }
    const handleSubmit  = (e)=>{
        e.preventDefault(); 
    }
  return (
    <div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        {/* {loading && <LoadSpinner />}
        {error && <ErrorMessage error={error} />}
        {success && <SuccessMessage message={success} />} */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            onChange={handleChange}
            // value={regInfo.name}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            onChange={handleChange}
            // value={regInfo.email}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={handleChange}
            // value={regInfo.password}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="submitButton">
          {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
          <ActiveButton type="submit" value="Sign up" />
        </Form.Group>
      </Form>
    </div>
  );
}
