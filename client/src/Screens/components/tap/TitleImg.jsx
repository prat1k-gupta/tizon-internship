import "./TitleImg.css";
import React from "react";
import data from "../../../data/TapData";

const TitleImg = ()=>{
    const bg = "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0";

    return(
        <div className="titleImg">
            <div className="logo"><img src={bg} alt="Logo" /></div>
            <div className="titleDes">
                <h3>{data.businessname}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export { TitleImg };