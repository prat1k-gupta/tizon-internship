import imageCompression from "browser-image-compression";

export const handleMultiImageUpload = async (
  imageFile,
  uploadMutlipleImages,
  setPicMessage,
  setMultipleArr
) => {
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
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

    await uploadMutlipleImages(compressedFile,setPicMessage,setMultipleArr); // write your own logic
  } catch (error) {
    console.log(error);
  }
};

export const uploadMutlipleImages = async (img,setPicMessage,setMultipleArr) => {
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
    //   console.log(multipleArr);
      setMultipleArr((prev) => [...prev, url]);
      // console.log(multipleArr)
    } catch (err) {
      setPicMessage(err);
      console.log(err);
    }
  }
};