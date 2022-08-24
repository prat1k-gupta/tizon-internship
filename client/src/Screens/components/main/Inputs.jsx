import React from "react";
import "./Inputs.css"

function InputField(props){
    return(
        <div className="input">
            <p style={{marginLeft: "10px", fontSize: "medium"}}>{props.label}</p>
            <input 
                type={props.inputType} 
                name={props.label} 
                placeholder={props.placeholder}
                className="inputField" 
            />
        </div>
    );
}

function ActiveButton(props){
    return <div className="button">
            <input 
                type={props.inputType} 
                value={props.value} 
                className="activeButtonInput" 
            />        
        </div>
}
function Button(props){
    return <div className="button">
            <input 
                type={props.inputType} 
                value={props.value} 
                className="ButtonInput" 
            />        
        </div>
}

export  {InputField, ActiveButton, Button};