import React from "react";
import "./BottomNav.css"
import { HiOutlineMail, HiOutlineGlobeAlt, HiHashtag } from "react-icons/hi";
import { RiContactsBookFill, RiWhatsappLine } from "react-icons/ri";
import data from "../../../../data/TapData";
import { ActiveButton } from "../../main/Inputs";
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
                {<Facebook  />}
                <Twitter />
                <Linkedin />
                <Instagram />
                <Web />
                {/* <hr style={{margin : "0"}}/> */}
                {/* Agar koi dikkat hui to iski vajah se ho sakti hai */}
                <ActiveButton type="button" value="Dismiss" onClick={()=>setShow(false)}/>
            </div>
        </div>
    
    }
        <div className="bottomNav">
            <div className="navBox">
                <div className="option" onClick={()=>Email()}><HiOutlineMail /><p>Email</p></div>
                <div className="option" onClick={()=>web()}><HiOutlineGlobeAlt /><p>Web</p></div>
                <div className="option" onClick={()=>contact()}><RiContactsBookFill style={{fill : "#b615dc", width : "35px"}}/><p>Save</p></div>
                <div className="option" onClick={()=>SendMessage()}><RiWhatsappLine  /><p>Whatsapp</p></div>
                <div className="option" onClick={()=>setShow(true)}><HiHashtag /><p>Social</p></div>
            </div>
        </div>    
    </>);
}

export { BottomNav };