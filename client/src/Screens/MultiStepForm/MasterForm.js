import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, ProgressBar } from 'react-bootstrap';
// import { ActiveButton} from '../components/main/Inputs';
import { MainScreen } from '../MainScreen'
import { ConfirmSubmission } from './ConfirmSubmission';
import { ContactInfo } from './ContactInfo';
import { SocialsInfo } from './SocialsInfo';
import { UploadInfo } from './UploadInfo';
import { YoutubeInfo } from './YoutubeInfo';
export const MasterForm = () => {
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
      ytlinks: [],
    });
    const [ytLinks, setYtLinks] = useState([
      {
        link: "",
      },
    ]);

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
        const res = await axios.post("/api/users/business", finalData, config);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const [step,setStep] = useState(0);

    const nextStep = ()=>{
        setStep(prev => prev+25);
    }

    const prevStep = ()=>{
        setStep(prev => prev-25);
    } 
    console.log(ytLinks)
  return (
    <MainScreen title="AddBusiness">
      <Container>
        <>
          <div className="mb-2">
            <ProgressBar striped now={step} label={`${step}%`} />
          </div>
          <div>
            {
              {
                0: (
                  <ContactInfo formData={formData} setFormData={setFormData} />
                ),
                25: (
                  <SocialsInfo formData={formData} setFormData={setFormData} />
                ),
                50: (
                  <UploadInfo formData={formData} setFormData={setFormData} />
                ),
                75: <YoutubeInfo ytLinks={ytLinks} setYtLinks={setYtLinks} />,
                100: (
                  <ConfirmSubmission
                    formData={formData}
                    setFormData={setFormData}
                  />
                ),
              }[step]
            }
            <div className="d-flex justify-content-around px-5 mt-5">
              {step > 20 ? (
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="ButtonInput"
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
  );
}
