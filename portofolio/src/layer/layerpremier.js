import Hidderdua from "../component/hidder";
import MotivateBar from "../component/motifatebar";
import Myskill from "../component/myskill";
import Footersatu from "../component/footer";
import Copyright from "../component/copyright";

import "./style/layerpremier.css"
import { useState } from "react";

const Layerpremier = () => {
    const [position, setPosition] = useState('pisi');
    const setFixed = () => {
        if(window.scrollY > 10 ){
            setPosition('pisi posisi')
        } else {
            setPosition('pisi')
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <>
         <div className={position}>
            <div className="flex items-center">
                <nav className="grid grid-cols-2 justify-between px-2 items-center">
                    <div className="text-2xl font-light text-gray-100 transition-all">Gufanto<span className="text-green-600 Dev">Dev</span></div>
                    <ul className="flex gap-4 text-lg">
                        <li><a href="#hero"><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button hovCol">Home</button></a></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button">Portofolio</button></li>
                        <li><a href="#footer"><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button">About</button></a></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button">Contect</button></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="hero">
        <Hidderdua/>
        </div>
            <MotivateBar/>
            <Myskill/>
            <div id="footer">
                <Footersatu/>
            </div>
            <Copyright/>
        </>
    )
}
export default Layerpremier;