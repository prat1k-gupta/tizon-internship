export const uploadToServer = async (img,formData,setFormData,setPicMessage) => {
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