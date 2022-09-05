import React from "react";
import "./socialHandles.css";
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsGlobe } from "react-icons/bs"
import { useAuth } from "../../../../AuthContext/AuthContext";
// import business from "../../../../business/Tapsocial"


// ------------------Facebook-----------------

const Facebook = ({business})=>{
    console.log("facebook "+ business.facebook)
    const facabooklink = ()=>{
        const link = business.facebook;
        window.open(link, "_blank")
    }
    return (
        <div className="handles facebook" onClick={()=>facabooklink()}>
            <BsFacebook />
            <p>Facebook</p>
        </div>
    );
}

// ------------------Twitter-----------------
const Twitter = ({business})=>{
    const twitterlink = ()=>{
        const link = business.twitter;
        window.open(link, "_blank")
    }
    
    return (
        <div className="handles twitter" onClick={()=>twitterlink()}>
            <BsTwitter />
            <p>Twitter</p>
        </div>
    );
}

// ------------------LinkedIn-----------------
const Linkedin = ({business})=>{
    const linkedinlink = ()=>{
        const link = business.linkedin;
        window.open(link, "_blank")
    }
    
    return (
        <div className="handles linkedin" onClick={()=>linkedinlink()}>
            <BsLinkedin />
            <p>LinkedIn</p>
        </div>
    );
}

// ------------------Instagram-----------------
const Instagram = ({business})=>{
    const instagramlink = ()=>{
        const link = business.instagram;
        window.open(link, "_blank")
    }
    return (
        <div className="handles instagram" onClick={()=>instagramlink()}>
            <BsInstagram />
            <p>Instagram</p>
        </div>
    );    
}

// ------------------Web-----------------
const Web = ({business})=>{
    const weblink = ()=>{
        const link = business.website;
        window.open(link, "_blank")
    }
    return (
        <div className="handles web" onClick={()=>weblink()}>
            <BsGlobe />
            <p>Website</p>
        </div>
    );    
}

export { Facebook, Twitter, Linkedin, Instagram, Web };