import "./style/hidder.css"
import { useState } from "react";

const Hiddersatu = () => {
    const [position, setPosition] = useState(false);
    const setFixed = () => {
        if(window.scrollY > 10) {
            setPosition(true)
        }else {
            setPosition(false)
        }
    }
    // console.log(window.screenY);
    window.addEventListener("scroll", setFixed)
    return(
        <div className={position ? 'pisi posisi' :'pisi'}>
            <div className="flex items-center">
                <nav className="grid grid-cols-2 justify-between px-2 items-center">
                    <div className="text-2xl font-light">Gufanto<span className="text-green-600 Dev">Dev</span></div>
                    <ul className="flex gap-4 text-lg">
                        <li><button href="#../component/footer" className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Home</button></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Portofolio</button></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >About</button></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Contect</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};
export default Hiddersatu;
