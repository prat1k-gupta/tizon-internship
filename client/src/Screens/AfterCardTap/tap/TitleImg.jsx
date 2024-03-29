import "./TitleImg.css";
import React from "react";
import dummyData from "../../../data/TapData"
const TitleImg = ({data})=>{
    if(!data){
        data = dummyData; 
    }
    // console.log(logo);

    return(
        <div className="titleImg">
            <div className="logo"><img src={data.logo? data.logo : dummyData.logo} alt="Logo" /></div>
            <div className="titleDes">
                <h3>{data.businessname}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export { TitleImg };