import React from "react";
import "./BottomNav.css"
import FileSaver from "file-saver"
import { HiOutlineMail, HiOutlineGlobeAlt, HiHashtag } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";
// import data from "../../../../data/TapData";
import { ActiveButton } from "../../../components/main/Inputs";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Web } from "./socialHandles";
import axios from "axios";

const BottomNav = ({business})=>{
    const data = {
        name: `${business.businessname}`,
        logo: `${business.logo}`,
        phone: `${business.phone}`,
        email: `${business.userid.email}`,
        website: `${business.website}`
    }
    console.log(data)
    const SendMessage = ()=>{
        let whatsapp = `https://wa.me/${data.phone}?text=I%20got%20your%20number%20via%20your%20business%20profile%2e%20I%20need%20some%20details%20on%20`;
        window.open(whatsapp, "_blank");
    };
    
    const Email = ()=>{
        let email = `mailto:${data.email}`;
        window.open(email, "_blank");
    };

    const web = ()=>{
        let link = data.website;
        // console.log(link)
        window.open(link, "_blank");
    };

    const contact = async ()=>{
      const config = {
        headers: {
          "Content-type" : "application/json"
        }
      }
      try{
        const res = await axios.post("/api/savecontact",data,config);
        const downloadTxtFile = () => {
          const blob = new Blob([res.data], {
            type: "text/vcard;charset=utf-8",
          });
          FileSaver.saveAs(blob,`${data.name}`); 
        };
        downloadTxtFile(); 

      }catch(err){
        console.log(err);
      }
    }

    const [show, setShow] = useState(false);

    return (
      <>
        {show && (
          <div className="popup-overlay">
            <div className={show? "pop up" : "pop"}>
              <h1>#Socials</h1>
              <hr />
              <Facebook business={business} />
              <Twitter business={business} />
              <Linkedin business={business} />
              <Instagram business={business} />
              <Web business={business} />
              {/* <hr style={{margin : "0"}}/> */}
              {/* Agar koi dikkat hui to iski vajah se ho sakti hai */}
              <ActiveButton
                type="button"
                value="Dismiss"
                onClick={() => setShow(false)}
              />
            </div>
          </div>
        )}
        <div className="bottomNav">
          <div className="navBox">
            <div className="option" onClick={() => Email()}>
              <HiOutlineMail />
            </div>
            <div className="option" onClick={() => web()}>
              <HiOutlineGlobeAlt />
            </div>
            <div className="option" style={{backgroundColor:"#D327A8", borderRadius: "50%", height:"50px" }} onClick={()=>contact()}>
              <RiContactsBookFill style={{fill : "#fff"}}/>
            </div>
            <div className="option" onClick={() => SendMessage()}>
              <SiWhatsapp />
            </div>
            <div className="option" onClick={() => setShow(true)}>
              <HiHashtag business = {business}/>
            </div>
          </div>
        </div>
      </>
    );
}

export { BottomNav };