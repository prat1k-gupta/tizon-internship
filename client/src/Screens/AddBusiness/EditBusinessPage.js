// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";
import { ActiveButton } from "../components/main/Inputs";
import { useNavigate } from "react-router-dom";
import { MainScreen } from "../MainScreen";
import { YtForm } from "./YtForm";
import imageCompression from "browser-image-compression";
import { useAuth } from "../../AuthContext/AuthContext";
import { handleMultiImageUpload, uploadMutlipleImages } from "../MultiStepForm/logic/MultipleImageUpload";
import { uploadToServer } from "../MultiStepForm/logic/SingleImageUpload";
import { ErrorMessage } from "../utils/ErrorMessage";
// import { ErrorMessage } from "../utils/ErrorMessage";
// import { LoadSpinner } from "../utils/LoadSpinner";
// import { SuccessMessage } from "../utils/SuccessMessage";

export const EditBusinessPage = () => {
  const { business , auth, setRefresh} = useAuth();
  const [picMessage, setPicMessage] = useState("");
  const [uploadStatus, setUploadStatus] = useState(0);
  const [multipleArr, setMultipleArr] = useState([]);
  console.log(multipleArr)
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

  async function handleImageUpload(imageFile, uploadToServer) {
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

      await uploadToServer(
        compressedFile,
        formData,
        setFormData,
        setPicMessage
      ); // write your own logic
    } catch (error) {
      console.log(error);
    }
  }

  const handleImagesUpload = async (
    imageFiles,
    handleMultiImageUpload,
    uploadMutlipleImages
  ) => {
    for (let i = 0; i < imageFiles.length; i++) {
      let file = imageFiles[i];
      await handleMultiImageUpload(
        file,
        uploadMutlipleImages,
        setPicMessage,
        setMultipleArr
      );
      setUploadStatus((prev) => prev + 25);
    }
    // setMultipleArr(imageFiles.FileList);
    // console.log(multipleArr)
  };
  // setFormData({...formData,ytlinks: ytLinks});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, ytlinks: ytLinks };
    const ultraFinalData = { ...finalData, pics: multipleArr };
    console.log("ultraFinalData "+ ultraFinalData);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const res = await axios.put("/api/users/editbusiness", ultraFinalData, config);
      setRefresh((ref)=>(!ref))
      console.log("editedBusiness"+res.data);
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
              {picMessage && <ErrorMessage error = {picMessage}/>}
              <Form.Group className="mb-3" controlId="formBasicUploadImages">
                <Form.Label>Upload Business Logo</Form.Label>
                <Form.Control
                  name="logo"
                  type="file"
                  onChange={(e) => {
                    handleImageUpload(e.target.files[0], uploadToServer);
                  }}
                  placeholder="choose file"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUploadImage">
                <Form.Label>Upload Images</Form.Label>
                <Form.Control
                  name="pics"
                  type="file"
                  multiple
                  onChange={(e) => {
                    if (Array.from(e.target.files).length > 4) {
                      e.preventDefault();
                      alert(`Cannot upload files more than 4`);
                      return;
                    }

                    handleImagesUpload(
                      e.target.files,
                      handleMultiImageUpload,
                      uploadMutlipleImages
                    );
                  }}
                  placeholder="choose file"
                />
                {uploadStatus ? (
                  <div className="mb-4">
                    <ProgressBar
                      striped
                      now={uploadStatus}
                      label={`${uploadStatus}%`}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
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
