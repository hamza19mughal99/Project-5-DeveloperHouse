import React , {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Materialuiform from "./Materialuiform";

function Contact() {
    useEffect(() => {
        Aos.init({ duration:1000});
      },[]);
    return (
        <>
            <div className="my-5">
                <h1 data-aos="zoom-in" className="text-center"> Contact Us</h1>
            </div>
            <div className="contact-div">
               <div className="row">
                   <div className="col-lg-6 col-md-6 col-10 mx-auto">
                   <Materialuiform />
                   </div>
                     
               </div>
            </div>
        </>
    );
}

export default Contact;