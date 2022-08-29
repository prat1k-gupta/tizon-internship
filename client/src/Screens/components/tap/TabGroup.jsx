import React, { useState } from "react";
import "./TabGroup.css";

const TabGroup = ()=>{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index)
        console.log(index);
    }

    return(
        <div className="tabgroup">
            <div className="tabs">
                <div 
                    className={toggleState === 1 ? "tab active-tab" : "tab"}
                    onClick={()=>toggleTab(1)}
                >
                    Photos
                </div>
                <div 
                    className={toggleState === 2 ? "tab active-tab" : "tab"}
                    onClick={()=>toggleTab(2)}
                >
                    Videos
                </div>
                <div 
                    className={toggleState === 3 ? "tab active-tab" : "tab"}
                    onClick={()=>toggleTab(3)}
                >
                    Connect
                </div>
            </div>
            <div className="content-tabs">
                <div 
                    className={toggleState === 1 ? "content active-content" : "content"}
                >
                    Photos
                </div>
                <div 
                    className={toggleState === 2? "content active-content" : "content"}
                >
                    Videos
                </div>
                <div 
                    className={toggleState === 3 ? "content active-content" : "content"}
                >
                    Connect
                </div>
            </div>
        </div>
    );
}

export { TabGroup };