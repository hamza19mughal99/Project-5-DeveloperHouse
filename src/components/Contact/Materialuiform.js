import React ,{useEffect} from 'react';
import "./Contact.css"
import Aos from "aos";
import "aos/dist/aos.css";
export default function Materialuiform() {
    useEffect(() => {
        Aos.init({ duration:1000});
      },[]);
    return (
    
            <div data-aos="fade-up" style={{ paddingBottom: "30px" }} className="row">
                <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-1">

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your Full Name" autoComplete="off" required
                            id="username" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter your Email Address " id="email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your Phone Number" id="number" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="4" placeholder="Enter your reviews or any query" required
                            id="comment"></textarea>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className=" btn" >Submit</button>
                    </div>

                </div>
            </div>
        
    );
}