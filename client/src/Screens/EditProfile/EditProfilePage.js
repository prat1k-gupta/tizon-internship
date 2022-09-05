import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import { ActiveButton } from '../components/main/Inputs';
import { MainScreen } from '../MainScreen'
import { ErrorMessage } from '../utils/ErrorMessage';
import { LoadSpinner } from '../utils/LoadSpinner';
import { SuccessMessage } from '../utils/SuccessMessage';

export const EditProfilePage = () => {
  const {user,setRefresh} = useAuth(); 
  const navigate = useNavigate(); 
  const [error,setError] = useState(""); 
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState("")

  const [editInfo,setEditInfo] = useState(user ? user : {
    name: "",
    email: "",
    currentpassword: "",
    password: "",
  }); 

  useEffect(()=>{
      if(!user){
        navigate('/')
      }
  },[])

  const handleChange = (e)=>{
    const {name,value} = e.target; 
    setEditInfo({
      ...editInfo,
      [name] : value
    })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const config = {
      headers:{
        "Content-type": "application/json"
      }
    }
    try{
      setLoading(true); 
      const res = await axios.put("/api/users/editprofile",editInfo,config)
      if(res){
        setSuccess("Changes saved successfully!!")
        setLoading(false);
        setRefresh((prev)=>(!prev))
      } 
    }catch(err){
      setError(err.response.data.error); 
      setLoading(false)
    }
  }

  console.log(editInfo)
  return (
    <MainScreen title="Edit your profile">
      <div>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          {loading && <LoadSpinner />}
          {success && <SuccessMessage message={success} />}
          {error && <ErrorMessage error={error} />}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              onChange={handleChange}
              value={editInfo.name}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3 input" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              onChange={handleChange}
              value={editInfo.email}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              name="currentpassword"
              type="password"
              onChange={handleChange}
              value={editInfo.password}
              placeholder="Current Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              name="newpassword"
              type="password"
              onChange={handleChange}
              value={editInfo.password}
              placeholder="New Password"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="submitButton">
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
            <ActiveButton type="submit" value="Save Changes" />
          </Form.Group>
        </Form>
      </div>
    </MainScreen>
  );
}
