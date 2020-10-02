import React from  'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Hospitals from "./Hospitals";
import Helpline from "./Helpline";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import {Switch,Route, Redirect} from "react-router-dom";
import Advisories from './Advisories';
const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/"component={Home}/>
            <Route exact path="/helpline"component={Helpline}/>
            <Route exact path="/Advisories"component={Advisories}/>
            <Route exact path="/hospitals"component={Hospitals}/>
            <Route exact path="/about"component={About}/>
            <Route exact path="/contactus"component={ContactUs}/>
             <Redirect to= "/"/>

        </Switch>
         </>
    );

};
export default App;