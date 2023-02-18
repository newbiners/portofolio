import Linkedin from "../component/icon/Linkedin";
import Instagram from "../component/icon/Instagram";
import React from "react";
import {Link} from "react-router-dom";

const Texthero = () => {
    return(
        <div>
             <div className="mt-52">
                <div className="mb-3">
                            <h1 className="text-2xl font-semibold text-green-600 mb-2">I'm Gufron</h1>
                            <h2 className="text-4xl font-semibold mb-7">Junior Front end Devloper from Indonesia</h2>
                            <p className="mb-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="text-1xl font-medium px-3 py-2 text-slate-50 bg-green-700 hover:bg-green-900 transition-all rounded-md duration-500">Contact Me</button>
                    <Linkedin/>
                    <Link to="https://instagram.com/gufanto?igshid=YmMyMTA2M2Y=" target="_blank">
                        <Instagram/>
                    </Link>
                </div>    
            </div>
        </div>
    )
};
export default Texthero;