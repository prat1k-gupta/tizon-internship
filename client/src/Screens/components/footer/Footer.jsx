import React from "react";
import "./footer.css";

function Footer(){
    let currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p className="copyright">Copyright © {currentYear} Tizon</p>
        </div>
    );
}

export default Footer;