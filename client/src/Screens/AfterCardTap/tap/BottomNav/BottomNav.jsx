import React from "react";
import "./BottomNav.css"
import { HiOutlineMail, HiOutlineGlobeAlt, HiHashtag } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";
// import data from "../../../../data/TapData";
import { ActiveButton } from "../../../components/main/Inputs";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Web } from "./socialHandles";

const BottomNav = ({business})=>{
    const data = {
        phone: `${business.phone}`,
        email: `${business.userid.email}`,
        website: `${business.website}`,
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

    const contact =()=>{

    }

    const [show, setShow] = useState(false);

    return (
      <>
        {show && (
          <div className="popup-overlay">
            <div className="pop">
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
            <div className="option" onClick={() => contact()}>
              <RiContactsBookFill style={{ fill: "#b615dc", width: "45px" }} />
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