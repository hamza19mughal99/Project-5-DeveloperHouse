import React from 'react';
import Aboutimg from "../../images/about.svg";
import Common from "../Common/Common";


function About() {
    return (
        <div>
            <Common name="welcome to"
            boldcom="about page"
            but="contact now"
            visit="/Contact" 
            img={Aboutimg}
            />
        </div>
    );
}

export default About;