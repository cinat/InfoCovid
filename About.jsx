import React from  "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/photo.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
        <Common name='Know more About'
         imgsrc={web} 
         visit='/contactus'
         btname="Contact Now"
           />
          
         </>
    );

};
export default About;