import "./ScrollArea.css";
import React from "react";
import {TitleImg} from "./TitleImg";
import { TabGroup } from "./TabGroup";
// about ot see the debit card image
function ScrollArea(){
    return (
        <div className="scrollArea">
            <TitleImg />
            <hr />
            <TabGroup />
        </div>
    );
}

export { ScrollArea };