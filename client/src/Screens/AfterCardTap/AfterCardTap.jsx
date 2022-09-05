import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import { BottomNav } from "./tap/BottomNav/BottomNav";
import { ScrollArea } from "./tap/ScrollArea";
import { StaticImage } from "./tap/StaticImage";

const AfterCardTap = () => {
    const [business,setBusiness] = useState(""); 
    const {setShowNav} = useAuth(); 
    const {id} = useParams(); 
    if(id){
        setShowNav(false); 
    }
    const fetchUser = async ()=>{
        const url = '/api/user/'+id; 
        try{
            const res = await axios.get(url); 
            setBusiness(res.data); 
        }catch(err){
            console.log(err); 
        }
    } 
    console.log(business)
    useEffect(()=>{fetchUser()},[business])
    return (
        <>
            {business && 
            <>
            <StaticImage statImg = {business? business.pics[0] : null}/>
            <ScrollArea business = {business} id = {id} />
            <BottomNav business = {business} />
            </>
            }
        </>
    
)};

export {AfterCardTap}; 