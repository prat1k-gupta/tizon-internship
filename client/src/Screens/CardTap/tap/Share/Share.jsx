import React from "react";
import "./Share.css";
import qr1 from "./qr.png";
import QRCode from 'qrcode'
import { ActiveButton } from "../../../components/main/Inputs";
import DivideOr from "../../../components/main/DivideOr";
import { useState } from "react";
import { BsTwitter, BsWhatsapp } from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { useAuth } from "../../../../AuthContext/AuthContext";
import { useEffect } from "react";


export const Share = ()=>{

    // Getting the profile url here
    const {business} = useAuth();
    const url = `${window.location.protocol}//${window.location.host}/business/${business._id}`;

    let postUrl = encodeURI(url);
    // postUrl = encodeURI(`https://tizonindia.herokuapp.com/business/6319947ee76f6038f6c5c36c`)
    let postTitle = encodeURI("Connect with me using the link\n");
    
    const [copy, setCopy] = useState("Copy Link");
    const [qr, setQr] = useState("");

    useEffect(()=>{
        const generateQR = async text => {
            try {
                const img = await QRCode.toDataURL(text, {
                width : 800,
                margin: 1,
                color:{
                    dark: "#b615dc"
                }
                })
              setQr(img);

              console.log({qr, img});
            } catch (err) {
              console.error(err)
            }
        }
        generateQR(postUrl)

    }, [postUrl]);


    const copied = ()=>{
        setCopy("Copied")
        navigator.clipboard.writeText(postUrl);

        setTimeout(()=>{
            setCopy("Copy Link")
        }, 2000);
    }

    // console.log(postUrl);

    
    
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}&quote=${postTitle}`;
    const twitterUrl = `https://twitter.com/share?url=${postUrl}&text=${postTitle}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`;
    const whatsAppUrl = `https://api.whatsapp.com/send?text=${postUrl}`;
    
    // console.log(twitterUrl);
    

    return(
        <div className="box">
            <div className="qr">
                {qr? <img src={qr} alt="QR" /> : <p>Unable to generate QR</p>}
                <div className="border-hide-1"></div>
                <div className="border-hide-2"></div>
            </div>
            <p>Scan here</p>
            <DivideOr />
            <div className="btn-lnk">
                <ActiveButton type="button" value={copy} onClick={()=>copied()}/>
            </div>
            <div className="social-icons">
                <div className="icon facebook" onClick={()=>window.open(facebookUrl, "_blank")}>
                    <FaFacebookF />
                </div>
                <div className="icon twitter" onClick={()=>window.open(twitterUrl, "_blank")}>
                    <BsTwitter />
                </div>
                <div className="icon linkedin" onClick={()=>window.open(linkedinUrl, "_blank")}>
                    <FaLinkedinIn /> 
                </div>
                <div className="icon whatsapp" onClick={()=>window.open(whatsAppUrl, "_blank")}>
                    <BsWhatsapp />
                </div>
            </div>
        </div>
    );
}