import React , {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Common.css";

function Common(props) {
    useEffect(() => {
        Aos.init({ duration:1000});
      },[]);
    return (
        <div>
            <section id="Common">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div data-aos="zoom-in-right" className="col-lg-6 pt-5 order-2 order-lg-1 main-Common">
                                    <h1> {props.name} <strong className="brand-name">{props.boldcom}</strong></h1>
                                    <h2 className="my-3" >We are the team of talented developers </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-started"> {props.but} </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-5 order-1 order-lg-2 Common-img">
                                    <img src={props.img} className="img-fluid animated" alt="growth-img" />
                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Common;