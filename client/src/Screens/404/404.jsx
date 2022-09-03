import React from "react";
import svg404 from "../../components/svg404.svg";
import "../WelcomeScreen/welcomescreen.css"
import "./404.css"

const Error404 = ()=>{
    return(
        <>
            <div className='box404'>
                <div className='svgbx'>
                    <img src={svg404} alt="Error404"/>
                </div>
                <p>Oops... looks like you got lost</p>
                {/* <ActiveButton type="button" value="Add your business"/> */}
            </div>
        </>
    );
}

export { Error404 };