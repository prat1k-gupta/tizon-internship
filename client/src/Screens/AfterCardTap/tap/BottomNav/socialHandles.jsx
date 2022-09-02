import React from "react";
import "./socialHandles.css";
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsGlobe } from "react-icons/bs"
import data from "../../../../data/TapData"


// ------------------Facebook-----------------
const Facebook = ({...rest})=>{
    const facabooklink = ()=>{
        const link = data.facebook;
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
const Twitter = ()=>{
    const twitterlink = ()=>{
        const link = data.twitter;
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
const Linkedin = ()=>{
    const linkedinlink = ()=>{
        const link = data.linkedin;
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
const Instagram = ()=>{
    const instagramlink = ()=>{
        const link = data.instagram;
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
const Web = ()=>{
    const weblink = ()=>{
        const link = data.website;
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