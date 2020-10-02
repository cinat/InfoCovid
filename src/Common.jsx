import React from  "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center ">
        <div className= "container-fluid">
            
                <div className="col-6 mx auto">
              
                  
                <h2 className="md-3 padding-0 margin-1">
                    Get to know more about us

                </h2>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center ">
                  <h1> {props.name} <strong className="brand-name"> InfoCovid </strong> </h1></div> 
                
                <div className="md-3">
                    <NavLink to={props.visit} className="btn-get-started">{props.btname} </NavLink>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src = {props.imgsrc} className = "img-fluid animated" alt= "Home.img"/>
                </div>
                </div>
    
    
        </section>
         </>
    );

};
export default Common;