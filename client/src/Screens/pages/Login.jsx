import React from "react";
import DivideOr from "../components/main/DivideOr";
import {InputField, ActiveButton, Button} from "../components/main/Inputs";
import "./Login.css";

function Login(){
    return(
        <>
            <h1 className="heading">Let's Sign You In</h1>
            <div className="box">
                <form action="#" method="post">
                    <InputField label="Email" inputType="email" placeholder="Email" />
                    <InputField label="Password" inputType="password" placeholder="Password"/>
                    <ActiveButton inputType="submit" value="Submit" />
                </form>
                <p className="signup-route">Already have account? Sign in</p>
                <DivideOr />
                <Button inputType="submit" value="Continue with Google" />
            </div>
        </>
    );
}

export default Login;