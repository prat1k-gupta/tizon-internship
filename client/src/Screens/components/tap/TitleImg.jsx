import "./TitleImg.css";
import React from "react";
const bg = "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0";


const TitleImg = ()=>{
    return(
        <div className="titleImg">
            <div className="logo"><img src={bg} alt="Logo" style={{
                width : "100%",
                
            }} /></div>

        </div>
    );
}

export {TitleImg};