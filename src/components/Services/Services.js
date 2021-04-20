import React , {useEffect} from 'react';
import "./Service.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Data from "./Data";
import MaterialuiService from "./MaterialuiService";

function Services() {
    useEffect(() => {
        Aos.init({ duration:1000});
      },[]);
    return (
        <>
            <div  className="my-5">
                <h1 data-aos="zoom-in" className="text-center">Services</h1>
            </div>
            <div className="container-fluid mb-5 ">
                <div className="row" >
                    <div className="col-10 mx-auto" >
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="serviceData">
                            {
                                Data.map((val, ind) => {
                                    return <MaterialuiService key={ind}
                                        img={val.img}
                                        title={val.title}
                                        details={val.details}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;