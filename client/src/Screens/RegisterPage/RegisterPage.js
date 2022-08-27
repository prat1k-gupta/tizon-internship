import axios from "axios";
import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MainScreen } from "../MainScreen";
import { ErrorMessage } from "../utils/ErrorMessage";
import { LoadSpinner } from "../utils/LoadSpinner";
import { SuccessMessage } from "../utils/SuccessMessage";

import { ActiveButton } from "../components/main/Inputs";
import "../components/main/Inputs.css";

export const RegisterPage = () => {
  const [regInfo, setRegInfo] = useState({
    name: "",
    email: "",
    password: "",
    pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  });  

  const [success,setSuccess] = useState("");
  const [error,setError] = useState(""); 
  const [loading,setLoading] = useState(false);
  const [picMessage,setPicMessage] = useState(""); 
  const handleChange = (e)=>{
    const {name,value} = e.target; 
    if(name!=="pic"){
      setRegInfo((regInfo)=>({
          ...regInfo,
          [name] : value
      }))
    }
  }


  const uploadToServer = async (img)=>{
    // console.log(img)
    if(!img){
      return setPicMessage("please select an image"); 
    }
    setPicMessage(null); 
    if(img.type === 'image/jpeg' || img.type === 'image/png'){
      const data = new FormData();
      data.append('file',img)
      data.append('upload_preset','tizonUploads')
      data.append("cloud_name", "dxl4uxoks");
      try{
        const res = await fetch("https://api.cloudinary.com/v1_1/dxl4uxoks/image/upload",{
          method: "post",
          body: data
        });
        const response = await res.json(); 
        const url = response.url.toString();
        setRegInfo({...regInfo, pic: url})  
      }catch(err){
        setPicMessage(err); 
        console.log(err)
      }
    }
  }

  async function handleImageUpload(imageFile) {
    // const imageFile = event.target.files[0];
    console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(
        "compressedFile instanceof Blob",
        compressedFile instanceof Blob
      ); // true
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      ); // smaller than maxSizeMB

      await uploadToServer(compressedFile); // write your own logic
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate(); 
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    setLoading(true); 
    try{
        const res = await axios.post("/api/users/register",regInfo,config)
        if(res){
            setSuccess(res.data.name + " you registered succesfully"); 
        }
        setLoading(false)
        navigate('/login')

    }catch(err){
        setError(err.response.data.error); 
        setLoading(false); 
    }
  }
  return (
    <MainScreen title="Let's Sign you up">
      <div>
        <Form autoComplete="off" onSubmit={handleSubmit}>
            {loading && <LoadSpinner/>}
            {error && <ErrorMessage error={error}/>}
            {success && <SuccessMessage message={success}/>}
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" onChange = {handleChange} value = {regInfo.name} placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3 input"  controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" onChange = {handleChange} value = {regInfo.email} placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange = {handleChange} value = {regInfo.password} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImages">
            {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
            <Form.Label>Upload Image</Form.Label>
            <Form.Control name="pic" type="file" onChange = {(e)=>{handleImageUpload(e.target.files[0])}} placeholder="choose file" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="submitButton">
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
            <ActiveButton type="submit" value="Submit"/>
            </Form.Group>
            <Form.Text className="text-muted">
            Already have an Account?
            <Link to="/login" style={{ fontWeight: "bold" }}> login Now </Link>
            </Form.Text>
        </Form>
      </div>
    </MainScreen>
  );
};
