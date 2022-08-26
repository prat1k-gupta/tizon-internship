import React from "react";
import "./card.css"
function Card(props){
    return(
        <div className="card-component">
            <div className="card">
                <h4 className="companyName">{props.name}</h4>
                <p>CEO : {props.ceo}</p>
            </div>
        </div>
    );
}

export default Card;