import React, { useState } from "react";
import alreadyData from "../../../data/imgData";
import "./Gallery.css";

const Gallery = ({data})=>{
    if(!data){
        data = alreadyData; 
    }
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState("");


    const getImg = (imglink)=>{
        // console.log(imglink);
        setTempImg(imglink);
        setModel(true);
    }
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempImg} alt="gallery" />
                <p className="closeIcon" onClick={()=>setModel(false)}>+</p>
            </div>
            <div className="gallery">
                {data.map((item, index)=>{
                    return (
                        <div className="pics" key={index} onClick={()=>getImg(item)}>
                            <img src={item} style={{width : "100%"}} alt="gallery"/>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export { Gallery };