import React, { useState } from "react";
import alreadyData from "../../../data/imgData";
import "./Gallery.css";
import { MdOutlineClose } from "react-icons/md"

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
            <div className="closeIcon" onClick={()=>setModel(false)}><MdOutlineClose /></div>
                <img src={tempImg} alt="gallery" />
            </div>
            <div className="gallery">
                {data.map((item, index)=>{
                    return (
                        <div className="pics" key={index} onClick={()=>getImg(item)}>
                            <img src={item} alt="gallery" style={{width : "100%"}}/>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export { Gallery };