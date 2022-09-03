// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ActiveButton } from "../components/main/Inputs";
import { useNavigate } from "react-router-dom";
import { MainScreen } from "../MainScreen";
import { YtForm } from "./YtForm";
import { useAuth } from "../../AuthContext/AuthContext";
// import { ErrorMessage } from "../utils/ErrorMessage";
// import { LoadSpinner } from "../utils/LoadSpinner";
// import { SuccessMessage } from "../utils/SuccessMessage";

export const EditBusinessPage = () => {
  const { business , auth,setRefresh} = useAuth();
  const navigate = useNavigate();
  console.log("businesss:" + business)
  
  useEffect(()=>{
    (()=>{
      console.log("sujeet")
      if (!business) {
        console.log("sujeet lomdu");
        navigate("/");
      }
    })();
    
  },[business])
  
  const [formData, setFormData] = useState(
      business ? business : {
      businessname: "",
      website: "",
      description: "",
      phone: "",
      instagram: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      logo: "",
      pics: [],
      ytlinks: [],
    }
  );
  const [ytLinks, setYtLinks] = useState(formData.ytlinks);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // setFormData({...formData,ytlinks: ytLinks});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, ytlinks: ytLinks };
    console.log(finalData);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const res = await axios.put("/api/users/editbusiness", finalData, config);
      setRefresh((ref)=>(!ref))
      console.log(res.data);
    } catch (err) {
      setRefresh((ref)=>(!ref))
      console.log(err);
    }
  };
  return (
    <>
      {auth && (
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
                  value={formData.businessname}
                  placeholder="Enter Business Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  name="website"
                  type="text"
                  onChange={handleChange}
                    value={formData.website}
                  placeholder="Enter Website"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  onChange={handleChange}
                    value={formData.description}
                  placeholder="Description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  type="tel"
                  onChange={handleChange}
                    value={formData.phone}
                  placeholder="Add Phone Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicInstagram">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  name="instagram"
                  type="text"
                  onChange={handleChange}
                    value={formData.instagram}
                  placeholder="https://instagram.com/"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLinkedin">
                <Form.Label>Linkedin</Form.Label>
                <Form.Control
                  name="linkedin"
                  type="text"
                  onChange={handleChange}
                    value={formData.linkedin}
                  placeholder="https://linkedin.com/in/"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFacebook">
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  name="facebook"
                  type="text"
                  onChange={handleChange}
                    value={formData.facebook}
                  placeholder="https://facebook.com/"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTwitter">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  name="twitter"
                  type="text"
                  onChange={handleChange}
                    value={formData.twitter}
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
              {/* <Form.Group className="mb-2" controlId="submitButton">
                <Button variant="primary" className="mt-2" type="submit">
                  Submit
                </Button>
              </Form.Group> */}
              <ActiveButton type="submit" value="Save Changes" />
            </Form>
          </div>
        </MainScreen>
      )}
    </>
  );
};
