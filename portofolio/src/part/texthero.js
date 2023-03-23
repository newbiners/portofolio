import Contect from "../Contact";

import Linkedin from "../component/icon/Linkedin";
import Instagram from "../component/icon/Instagram";
import React from "react";
import "./style/texthero.css"

import { useState } from "react";
import {Link} from "react-router-dom";
import Cancle from "../component/icon/cancle";
const Texthero = () => {
    const [active, setActive] = useState('contect contect-dont');
    const btnActive = () =>{
        setActive(active === 'contect contect-dont' ? 'contect' : 'contect contect-dont')
    }
    return(
             <div className="mt-40 me:mt-40  md:mt-20 sm:mt-28 xs:mt-15" style={{maxWidth: "100%"}}>
                <div className="mb-3">
                    <div className="mx-2 flex flex-col text-start md:text-start xs:text-center">
                            <h1 className=" font-semibold text-green-600 mb-2 xl:text-4xl lg:text-3xl me:text-2xl md:text-xl xs:text-2xl name">I'm Gufron</h1>
                            <h2 className=" font-semibold text-5xl mb-7 xl:text-5xl me:text-4xl lg:mb-5 md:mb-5 sm:text-3xl xs:text-2xl jobs">Front end Devloper from Indonesia</h2>
                            <p className="mb-7 xl:mb-7 xl:text-base lg:mb-5 lg:text-sm md:text-xs md:mb-4 description">Front-end is the development of the graphical user interface of a website ,so that users can view and interact with the website.</p>
                    </div>
                    <div className="flex gap-4 items-center justify-start md:justify-start xs:justify-center">
                        <button onClick={btnActive} className="text-1xl font-medium px-3 py-2 text-slate-50 bg-green-700 hover:bg-green-900 transition-all rounded-md duration-500 xl:text-1xl xl:px-3 xl:py-2 ">Contact Me</button>
                        <Link to="https://www.linkedin.com/in/gufron-aprilianto-a046b1266/" target="_blank">
                            <Linkedin/>
                        </Link>
                        <Link to="https://instagram.com/gufanto?igshid=YmMyMTA2M2Y=" target="_blank">
                            <Instagram/>
                        </Link>
                    </div> 
                <div className={active}>
                    <div className="max-w-xl mx-auto px-9">
                    <button className="absolute top-32 bg-red-700 p-3 rounded-3xl" onClick={btnActive}>
                        <Cancle/>
                    </button>
                    <Contect/>
                    </div>
                    <span className="bg-blur"></span>
                </div>  
            </div>
        </div>
    )
};
export default Texthero;