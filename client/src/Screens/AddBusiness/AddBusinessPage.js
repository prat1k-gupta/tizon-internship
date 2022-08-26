// import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../MainScreen";
import { YtForm } from "./YtForm";
import axios from "axios";
// import { ErrorMessage } from "../utils/ErrorMessage";
// import { LoadSpinner } from "../utils/LoadSpinner";
// import { SuccessMessage } from "../utils/SuccessMessage";

export const AddBusinessPage = () => {
  const [formData, setFormData] = useState({
    businessname: "",
    website: "",
    description: "",
    phone: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    pics: [],
    ytlinks: []
  });
  const [finalData,setFinalData] = useState(""); 
 
  const [ytLinks, setYtLinks] = useState([
    {
      link: "",
    },
  ]);
  const handleChange = (e)=>{
    const {name,value} = e.target; 
    setFormData((prev)=>({
        ...prev,
        [name]: value
    }))
  }

  const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = formData; 
        formData.ytlinks = ytLinks; 
        setFormData(data);
        setFinalData(formData);
        const config = {
            headers: {
                "content-type": "application/json"
            }
        }
        try{
            const res = await axios.post("api/users/addbusiness",finalData,config)
            console.log(res.data);
        }catch(err){
            console.log(err); 
        } 
    }
    return (
        <MainScreen title="Add Business Details">
      <div>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          {/* {loading && <LoadSpinner />} */}
          {/* {error && <ErrorMessage error={error} />} */}
          {/* {success && <SuccessMessage message={success} />} */}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control
              name="businessname"
              type="text"
              onChange={handleChange}
              //   value={regInfo.name}
              placeholder="Enter Business Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website</Form.Label>
            <Form.Control
              name="website"
              type="text"
              onChange={handleChange}
              //   value={regInfo.email}
              placeholder="Enter Website"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              onChange={handleChange}
              //   value={regInfo.password}
              placeholder="Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="tel"
              onChange={handleChange}
              //   value={regInfo.password}
              placeholder="Add Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInstagram">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              name="instagram"
              type="url"
              onChange={handleChange}
              //   value={regInfo.password}
              placeholder="https://instagram.com/"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLinkedin">
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
              name="linkedin"
              type="url"
              onChange={handleChange}
              //   value={regInfo.password}
              placeholder="https://linkedin.com/in/"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFacebook">
            <Form.Label>Facebook</Form.Label>
            <Form.Control
              name="facebook"
              type="url"
              onChange={handleChange}
              //   value={regInfo.password}
              placeholder="https://facebook.com/"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTwitter">
            <Form.Label>Twitter</Form.Label>
            <Form.Control
              name="twitter"
              type="url"
              onChange={handleChange}
              //   value={regInfo.password}
              placeholder="https://twitter.com/"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Upload Images</Form.Label>
            <Form.Control
              name="pics"
              type="file"
              onChange={handleChange}
              placeholder="choose file"
            />
          </Form.Group>
          {ytLinks.map((link, index) => (
            <YtForm
              key={index}
              index={index}
              size={ytLinks.length}
              list={ytLinks}
              addMore={setYtLinks}
            />
          ))}
          <Form.Group className="mb-2" controlId="submitButton">
            <Button variant="primary" className="mt-2" type="submit">
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
