import "./ScrollArea.css";
import React from "react";
import {TitleImg} from "./TitleImg";
import { TabGroup } from "./TabGroup";
import { useAuth } from "../../../AuthContext/AuthContext";

function ScrollArea(){
    const {business} = useAuth(); 
    return (
        <div className="scrollArea">
            <TitleImg data = {business}/>
            <hr />
            <TabGroup />
        </div>
    );
}

export { ScrollArea };