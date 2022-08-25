import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../MainScreen";

export const RegisterPage = () => {
  const {regInfo,setRegInfo} = useState({
    name: "",
    email: "",
    password: "",
    pic: ""
  })  
  return (
    <MainScreen title="Let's Sign you up">
      <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Name" />
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="submitButton">
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form.Group>
            <Form.Text className="text-muted">
            Already have an Account?
            <Link to="/login" style={{ fontWeight: "bold" }}>
                login Now
            </Link>
            </Form.Text>
        </Form>
      </div>
    </MainScreen>
  );
};
