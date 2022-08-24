import React from "react";
import DivideOr from "../components/main/DivideOr";
import {InputField, ActiveButton, Button} from "../components/main/Inputs";
import "./Login.css";

function Signup(){
    return(
        <>
            <h1 className="heading">Let's Sign You Up</h1>
            <div className="box">
                <form action="#" method="post">
                    <InputField label="Name" inputType="text" placeholder="Name" />
                    <InputField label="Email" inputType="email" placeholder="Email" />
                    <InputField label="Password" inputType="password" placeholder="Password"/>
                    <InputField label="Confirm Password" inputType="password" placeholder="Confirm Password"/>
                    <ActiveButton inputType="submit" value="Submit" />
                </form>
                <p className="signup-route">Don't have account? Sign up</p>
                <DivideOr />
                <Button inputType="button" value="Continue with Google" />
            </div>
        </>
    );
}

export default Signup;