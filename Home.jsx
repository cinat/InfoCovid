import React from  "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/sick.svg";

const Home = () => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className= "container-fluid nav_bg">
            <div className="row">
                <div className="col-6 mx auto">
              
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center">
                <h2 className="my-5">
                    We are the team of responsible citizens providing essential info

                </h2>
                </div>      

                <h1>Be Aware, Be Safe with <strong className="brand-name"> CovidIndia </strong> </h1>
                
                <div className="md-5">
                    <br/>
                    <br/>
                    <NavLink to="/helpline" className="btn-get-started "> Get started </NavLink>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src = {web} className = "img-fluid animated float-right" alt= "Home.img"/>
                </div>
                </div>
            </div>
    
        </section>
         </>
    );

};
export default Home;