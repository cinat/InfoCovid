import React from  "react";
import pic from "../src/images/covid.png";
import pict from"../src/images/call.png";
import Table1 from "./Table1";
const Helpline = () => {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">In case of Emergency, Call the helpline</h1>

        </div>
        <div className= "container-fluid mb-5">
            
                <div className="col-10 mx auto">
                    <div className="row gy-2">
                    <div className="col-md-4 col-lg-2 col-6  ">

<div class="card">
<img src={pic} class="card-img-top" alt="..."/>
<div class="card-body ">
<h5 class="card-title">Need help?</h5>
<p class="card-text">If you are facing any issues contacting the helplines, please let us know</p>
<a href="/contactus" class="btn btn-danger">Click here</a>

</div>

</div>

</div>
</div>


    </div>
                    </div>
                    

              
                            <Table1/>

            

         </>
    );

};
export default Helpline;