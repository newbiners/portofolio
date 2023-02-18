import React from "react";
// import Hiddersatu from "../part/hidder";
import Images from "../part/images";
import Texthero from "../part/texthero";
///////
import './style/hidder.css'

const Hidderdua = () => {
    return (
        <div className="overflow-hidden ">
            <div  style={{background: '#08090E',fontFamily: 'poppins', letterSpacing: '2px', height: '95vh'}}>
                <div className="text-gray-100 px-10 grid-hidder mx-14 relative">
                    {/* <Hiddersatu/> */}
                    <Images/>
                    <Texthero/>
                </div>
            </div>
        </div>
    )
}

export default Hidderdua;