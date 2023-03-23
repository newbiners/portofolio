import React from "react";
import Images from "../part/images";
import Texthero from "../part/texthero";

import './style/hidder.css'

const Hidderdua = () => {
    return (
        <div className="overflow-hidden ">
            <div  style={{background: '#08090E',fontFamily: 'poppins', letterSpacing: '2px'}} className="py-10">
                <div className="text-gray-100 px-10 grid grid-cols-2 gap-4  relative mx-auto md:grid-cols-2 xs:grid-cols-1" style={{maxWidth:'80rem'}}>
                    <div className="justify-self-end">
                    <Texthero/>
                    </div>
                    <div className="self-center">
                        <Images/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hidderdua;