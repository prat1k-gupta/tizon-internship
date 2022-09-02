import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ActiveButton } from "../../../components/main/Inputs";

export const Connect = ({ id }) => {
  //api/stats/connect
  const [connectInfo, setConnectInfo] = useState({
    name: "",
    businessname: "",
    website: "",
    phone: "",
    email: "",
    instagram: "",
    businessid: { id },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConnectInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(connectInfo);

  //submit connect info
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/stats/connect", connectInfo, config);
      console.log(res);
      window.alert(res.data.message); 
    } catch (err) {
      console.log(err);
    }
  };
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

        <Form.Group className="mb-3" controlId="formBasicBusiness">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            name="businessname"
            type="text"
            onChange={handleChange}
            // value={regInfo.password}
            placeholder="Enter Business Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            type="tel"
            onChange={handleChange}
            // value={regInfo.password}
            placeholder="Enter Phone Number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicWebsite">
          <Form.Label>website</Form.Label>
          <Form.Control
            name="website"
            type="text"
            onChange={handleChange}
            // value={regInfo.password}
            placeholder="Enter Website"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicWebsite">
          <Form.Label>instagram</Form.Label>
          <Form.Control
            name="instagram"
            type="text"
            onChange={handleChange}
            // value={regInfo.password}
            placeholder="Enter Website"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="submitButton">
          {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
          <ActiveButton type="submit" value="Connect with Me" />
        </Form.Group>
      </Form>
    </div>
  );
};
