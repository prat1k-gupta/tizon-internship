import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainScreen } from '../MainScreen'
import axios from "axios"
import { ErrorMessage } from '../utils/ErrorMessage';
import { LoadSpinner } from '../utils/LoadSpinner';
import { SuccessMessage } from '../utils/SuccessMessage';
export const LoginPage = () => {
    const [loginInfo,setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const [success,setSuccess] = useState(""); 
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false);
    const handleChange = (e)=>{
        const {name,value} = e.target
        setLoginInfo(prevLogin=>({
            ...prevLogin,
            [name] : value
        }))
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const config = {
            headers: {
                "Content-type" : "application/json"
            }
        }
        setLoading(true);
        try{
            const res = await axios.post("/api/users/login",loginInfo,config); 
            if(res)
                setSuccess("welcome " + res.data.name)
            setLoading(false);
            
        }catch(err){
            setError(err.response.data.error)
            setLoading(false);
        } 
    }

  return (
    <MainScreen title="Let's Sign you in">
      {loading && <LoadSpinner/>}  
      {error && <ErrorMessage error={error}/>}
      {success && <SuccessMessage message={success}/>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" onChange={handleChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="submitButton">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
        <Form.Text className="text-muted">
          Don't Have an Account? <Link to="/register" style={{fontWeight: "bold"}}>Register Now</Link>
        </Form.Text>
      </Form>
    </MainScreen>
  );
}
