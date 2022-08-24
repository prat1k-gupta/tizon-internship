import React from "react";
const or = {
    width : "45%",
    height : "1px",
    background : "#fff",
    margin : "10px"

};
function DivideOr(){
    return(<div style={{display : "flex", justifyContent : "center", alignItems : "center",  width : "auto", height : "20px", marginTop : "20px"}}>
    <div style={or}></div>Or<div style={or}></div>
    </div>
    );
}

export default DivideOr;
