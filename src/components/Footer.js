import React from 'react';
import "../App.css";
import mylogo from "../images/my Logo.png";

function Footer() {
    return (
        <>
            <div className="footer-div">
                <p>CopyRights Reserved @ DeveloperHouse | <img src={mylogo} width="40px" alt="img" /> </p>
            </div>

        </>
    );
}

export default Footer;