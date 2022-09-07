import axios from 'axios';
import React, {useState } from 'react'
import { Button, Container, ProgressBar } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
// import { ActiveButton} from '../components/main/Inputs';
import { MainScreen } from '../MainScreen'
import { ErrorMessage } from '../utils/ErrorMessage';
import { ConfirmSubmission } from './ConfirmSubmission';
import { ContactInfo } from './ContactInfo';
import { SocialsInfo } from './SocialsInfo';
import { UploadInfo } from './UploadInfo';
import { YoutubeInfo } from './YoutubeInfo';
import { contactInfoValidation, socialsInfoValidation } from './validation/formValidation';
export const MasterForm = () => {
    const {auth,setRefresh} = useAuth();
    const navigate = useNavigate(); 
    const [errorMsg,setErrorMsg] = useState(null); 
    const [formData, setFormData] = useState({
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
    });
    const [ytLinks, setYtLinks] = useState([
      {
        link: "",
      },
    ]);
    const [multipleArr, setMultipleArr] = useState([]);
    console.log(multipleArr)
    const handleSubmit = async (e) => {
      e.preventDefault();
      const finalData = { ...formData, ytlinks: ytLinks};
      const ultraFinalData = {...finalData, pics: multipleArr };
      console.log(ultraFinalData);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      };
      try {
        const res = await axios.post("/api/users/business", ultraFinalData, config);
        console.log(res.data);
        setRefresh(true); 
        navigate("/")

      } catch (err) {
        console.log(err);
      }
    };

    const [step,setStep] = useState(0);
    
    const nextStep = ()=>{
        
        switch(step){
          case 0: 
          contactInfoValidation(formData,setErrorMsg,setStep); 
          break; 
          case 25: 
          console.log("water")
          socialsInfoValidation(formData, setErrorMsg, setStep);
          break;
          default:
            setStep(prev=> prev+25)
        }
    }

    const prevStep = ()=>{
        setStep(prev => prev-25);
    } 

    //form validation 
    
    
  return (
    <>
      {auth && (
        <MainScreen title="AddBusiness">
          <Container>
            <>
              <div className="mb-4 mt-2 px-3">
                <ProgressBar striped now={step} label={`${step}%`} />
              </div>
              {errorMsg && <ErrorMessage error={errorMsg}/>}
              <div>
                {
                  {
                    0: (
                      <ContactInfo
                        formData={formData}
                        setFormData={setFormData}
                      />
                    ),
                    25: (
                      <SocialsInfo
                        formData={formData}
                        setFormData={setFormData}
                      />
                    ),
                    50: (
                      <UploadInfo
                        formData={formData}
                        setFormData={setFormData}
                        multipleArr={multipleArr}
                        setMultipleArr={setMultipleArr}
                      />
                    ),
                    75: (
                      <YoutubeInfo ytLinks={ytLinks} setYtLinks={setYtLinks} />
                    ),
                    100: (
                      <ConfirmSubmission
                        formData={formData}
                        setFormData={setFormData}
                      />
                    ),
                  }[step]
                }
                <div className="d-flex justify-content-evenly px-3 mt-3">
                  {step > 20 ? (
                    <Button
                      variant="outline-primary"
                      size="lg"
                      className="ButtonInput me-2 "
                      onClick={prevStep}
                    >
                      Back
                    </Button>
                  ) : null}
                  {step < 100 ? (
                    <Button
                      onClick={nextStep}
                      size="md"
                      className="activeButtonInput"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      size="md"
                      className="activeButtonInput"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>
            </>
          </Container>
        </MainScreen>
      )}
    </>
  );
}
