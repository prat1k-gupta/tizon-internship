import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
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
    const [step,setStep] = useState(1);
    const nextStep = ()=>{
        setStep(prev => prev+1);
    } 
    const prevStep = ()=>{
        setStep(prev => prev-1);
    } 
    console.log(ytLinks)
  return (
    <MainScreen title="AddBusiness">
      <Container>
        <>
          <div>
            {
              {
                1: (
                  <ContactInfo formData={formData} setFormData={setFormData} />
                ),
                2: (
                  <SocialsInfo formData={formData} setFormData={setFormData} />
                ),
                3: <UploadInfo formData={formData} setFormData={setFormData} />,
                4: <YoutubeInfo ytLinks={ytLinks} setYtLinks={setYtLinks} />,
                5: (
                  <ConfirmSubmission
                    formData={formData}
                    setFormData={setFormData}
                  />
                ),
              }[step]
            }
            <div className="d-flex justify-content-around px-5 mt-5">
              {step > 1 ? (
                <button className="btn btn-warning" onClick={prevStep}>
                  Back
                </button>
              ) : null}
              <button className="btn btn-warning" onClick={nextStep}>
                {step === 5 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </>
      </Container>
    </MainScreen>
  );
}
