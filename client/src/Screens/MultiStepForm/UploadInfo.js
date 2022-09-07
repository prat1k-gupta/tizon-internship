import React, { useState } from 'react'
import { Form, ProgressBar } from 'react-bootstrap';
import { FormTitle } from './FormTitle';
import { ErrorMessage } from '../utils/ErrorMessage';
import imageCompression from "browser-image-compression";
import { uploadToServer } from './logic/SingleImageUpload';
import {handleMultiImageUpload, uploadMutlipleImages } from "./logic/MultipleImageUpload"
export const UploadInfo = ({formData,setFormData,multipleArr,setMultipleArr}) => {
    const [picMessage,setPicMessage] = useState(""); 
    const [uploadStatus,setUploadStatus] = useState(0); 
    //single Image upload
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

        await uploadToServer(compressedFile,formData,setFormData,setPicMessage); // write your own logic
      } catch (error) {
        console.log(error);
      }
    }
  

    const  handleImagesUpload = async (
      imageFiles,
      handleMultiImageUpload,
      uploadMutlipleImages
    ) => {
      for (let i = 0; i < imageFiles.length; i++) {
        let file = imageFiles[i];
        await handleMultiImageUpload(file, uploadMutlipleImages,setPicMessage,setMultipleArr);
        setUploadStatus((prev)=>(prev+25))
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
          <Form.Label>Upload Business Images (Max Limit: 4)</Form.Label>
          <Form.Control
            name="pics"
            type="file"
            multiple
            onChange={(e) => {
              console.log(multipleArr.length); 
              if (Array.from(e.target.files).length > 4 || multipleArr.length>5) {
                e.target.value = ""; 
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
          {uploadStatus ? 
          <div className="mb-4 mt-2">
          <ProgressBar striped now={uploadStatus} label={`${uploadStatus/25}/4`} />
          </div>: 
          <div></div>}
        </Form.Group>
      </Form>
    </FormTitle>
  );
}
