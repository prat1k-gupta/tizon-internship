import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { FormTitle } from './FormTitle';
import { ErrorMessage } from '../utils/ErrorMessage';
import imageCompression from "browser-image-compression";

export const UploadInfo = ({formData,setFormData,multipleArr,setMultipleArr}) => {
    const [picMessage,setPicMessage] = useState(""); 

    const uploadToServer = async (img) => {
      // console.log(img)
      if (!img) {
        return setPicMessage("please select an image");
      }
      setPicMessage(null);
      if (img.type === "image/jpeg" || img.type === "image/png") {
        const data = new FormData();
        data.append("file", img);
        data.append("upload_preset", "tizonUploads");
        data.append("cloud_name", "dxl4uxoks");
        try {
          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dxl4uxoks/image/upload",
            {
              method: "post",
              body: data,
            }
          );
          const response = await res.json();
          const url = response.url.toString();
          setFormData({ ...formData, logo: url });
        } catch (err) {
          setPicMessage(err);
          console.log(err);
        }
      }
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

        await uploadToServer(compressedFile); // write your own logic
      } catch (error) {
        console.log(error);
      }
    }
    const uploadMutlipleImages = async (img) => {
      console.log(img); 
      if (!img) {
        return setPicMessage("please select an image");
      }
      setPicMessage(null);
      if (img.type === "image/jpeg" || img.type === "image/png") {
        const data = new FormData();
        data.append("file", img);
        data.append("upload_preset", "tizonUploads");
        data.append("cloud_name", "dxl4uxoks");
        try {
          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dxl4uxoks/image/upload",
            {
              method: "post",
              body: data,
            }
          );
          const response = await res.json();
          const url = response.url.toString();
          console.log(multipleArr)
          setMultipleArr((prev)=>([...prev,url]));
          // console.log(multipleArr)
        } catch (err) {
          setPicMessage(err);
          console.log(err);
        }
      }
    };
    console.log(multipleArr); 

    const handleMultiImageUpload = async (imageFile, uploadMutlipleImages) => {
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

        await uploadMutlipleImages(compressedFile); // write your own logic
      } catch (error) {
        console.log(error);
      }
    };

    const  handleImagesUpload = async (
      imageFiles,
      handleMultiImageUpload,
      uploadMutlipleImages
    ) => {
      for (let i = 0; i < imageFiles.length; i++) {
        let file = imageFiles[i];
        await handleMultiImageUpload(file, uploadMutlipleImages);
      }
      // setMultipleArr(imageFiles.FileList);
      // console.log(multipleArr)
    };
    // console.log(multipleArr)
    console.log(multipleArr)
  return (
    <FormTitle title="Upload Your Business Images">
      <Form>
        {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
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
            onChange={(e) =>
              handleImagesUpload(
                e.target.files,
                handleMultiImageUpload,
                uploadMutlipleImages
              )
            }
            placeholder="choose file"
          />
        </Form.Group>
      </Form>
    </FormTitle>
  );
}
