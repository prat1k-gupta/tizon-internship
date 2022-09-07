import validator from "validator";
export const contactInfoValidation = (formData, setErrorMsg,setStep) => {
  const timeOut = () => {
    setTimeout(() => {
      setErrorMsg(null);
    }, 2000);
  };
  if (!formData.businessname || !formData.description || !formData.phone) {
    setErrorMsg("Please Enter the requied field");
    timeOut();
  } else if (!validator.isURL(formData.website)) {
    setErrorMsg("please enter the valid website");
    timeOut();
  } else if (!validator.isLength(formData.phone, { min: 10 })) {
    setErrorMsg("Phone number should be 10 digits long");
    timeOut();
  } else {
    setStep((prev) => prev + 25);
    setErrorMsg(null);
  }
};

export const socialsInfoValidation = (formData, setErrorMsg,setStep) => {
  const timeOut = () => {
    setTimeout(() => {
      setErrorMsg(null);
    }, 2000);
  };
  if (
    (formData.instagram && !validator.isURL(formData.instagram)) ||
    (formData.linkedin && !validator.isURL(formData.linkedin)) ||
    (formData.twitter && !validator.isURL(formData.twitter) ) ||
    (formData.facebook && !validator.isURL(formData.facebook))
  ) {
    setErrorMsg("please enter the valid socials url");
    timeOut();
  }else {
    setStep((prev) => prev + 25);
    setErrorMsg(null);
  }
};

