import React, { useState } from "react";
import data from "../../../data/imgData";
import "./Gallery.css";

const Gallery = ()=>{

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
                <img src={tempImg} alt="Image" />
            </div>
            <div className="gallery">
                {data.map((item, index)=>{
                    return (
                        <div className="pics" key={index} onClick={()=>{getImg(item.link)}}>
                            <img src={item.link} alt="Image" style={{width : "100%"}}/>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export { Gallery };