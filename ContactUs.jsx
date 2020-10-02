import React from  "react";
import mask from "./images/mask.jpg";
const ContactUs = () => {
    return (
        <>
        <h1 className="text-info">We are available 24X7 for you, feel free to write to us!
            <br/>
            <br/>
        </h1>
        <h2 className="text-white bg-dark">
            Phone number : 887711009921
            
        </h2>
        <h3 className="float-center text-white bg-dark">
            Drop us a mail on <br/>
        
         Email : InfoCovicontact@yuub.com</h3>
         <img src ={mask} alt="photo.img" className="inline-block"/>
         </>
    );

};
export default ContactUs;