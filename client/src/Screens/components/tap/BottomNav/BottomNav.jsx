import React from "react";
import "./BottomNav.css"
import { HiOutlineMail, HiOutlineGlobeAlt, HiHashtag } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";
import data from "../../../../data/TapData";


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
    
    const hashtag = ()=>{
        
    }

    return (
        <div className="bottomNav">
            <div className="navBox">
                <div className="option" onClick={()=>Email()}><HiOutlineMail /><p>Email</p></div>
                <div className="option" onClick={()=>web()}><HiOutlineGlobeAlt /><p>Web</p></div>
                <div className="option" onClick={()=>contact()}><RiContactsBookFill style={{fill : "#b615dc", width : "35px"}}/><p>Save</p></div>
                <div className="option" onClick={()=>SendMessage()}><SiWhatsapp  /><p>Whatsapp</p></div>
                <div className="option" onClick={()=>hashtag()}><HiHashtag /><p>Social</p></div>
            </div>
        </div>
    );
}

export { BottomNav };