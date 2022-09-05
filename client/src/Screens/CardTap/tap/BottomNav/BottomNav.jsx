import React from "react";
import "./BottomNav.css"
import { HiOutlineMail, HiOutlineGlobeAlt, HiHashtag } from "react-icons/hi";
import { RiContactsBookFill, RiWhatsappLine } from "react-icons/ri";
import data from "../../../../data/TapData";
import { ActiveButton } from "../../../components/main/Inputs";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Web } from "./socialHandles";

const BottomNav = ()=>{

    const SendMessage = ()=>{
        let whatsapp = `https://wa.me/${data.phone}?text=I%20got%20your%20number%20via%20your%20business%20profile%2e%20I%20need%20some%20details%20on%20`;
        window.open(whatsapp, "_blank");
    };
    
    const Email = ()=>{
        let email = `mailto:${data.userid.email}`;
        console.log(email);
        window.open(email, "_blank");
    };

    const web = ()=>{
        let link = data.website;
        window.open(link, "_blank");
    };

    const contact =()=>{

    }

    const [show, setShow] = useState(false);

    return (<>
        {show &&
        <div className="popup-overlay">
            <div className="pop">
                <h1>#Socials</h1>
                <hr />
                <Web />
                <Linkedin />
                <Twitter />
                <Instagram />
                <Facebook  />
                {/* Agar koi dikkat hui to is active button vajah se ho sakti hai */}
                <ActiveButton type="button" value="Dismiss" onClick={()=>setShow(false)}/>
            </div>
        </div>
    
    }
        <div className="bottomNav">
            <div className="navBox">
                <div className="option" onClick={()=>Email()}><HiOutlineMail /></div>
                <div className="option" onClick={()=>web()}><HiOutlineGlobeAlt /></div>
                <div className="option" style={{backgroundColor:"#D327A8", borderRadius: "50%", height:"50px" }} onClick={()=>contact()}><RiContactsBookFill style={{fill : "#fff"}}/></div>
                <div className="option" onClick={()=>SendMessage()}><RiWhatsappLine  /></div>
                <div className="option" onClick={()=>setShow(true)}><HiHashtag /></div>
            </div>
        </div>    
    </>);
}

export { BottomNav };