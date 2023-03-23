import "./style/hidder.css"
import { useState } from "react";

const Hiddersatu = () => {
    const [position, setPosition] = useState(false);
    const [location, setLocation] = useState('menu');
    const setFixed = () => {
        if(window.scrollY > 10) {
            setPosition(true)
        }else {
            setPosition(false)
        }
    }
    const setButton = () => {
        setLocation(location === 'menu' ? 'menu mamat':'menu')
    }
    window.addEventListener("scroll", setFixed)
    return(
        <section className=" relative">
            <div className={position ? 'pisi posisi' :'pisi'}>
                <div className=" items-center mx-auto bg-hidder">
                    <nav className=" grid grid-35-65 justify-between gap-0 px-2 me:items-center md:px-2 sm:px-6 sm:grid-35-65">
                        <div className="text-2xl font-light text-slate-100 logo">Gufanto<span className="text-green-600 Dev">Dev</span></div>
                        <div className={location}>
                            <ul className="flex gap-15 text-lg items-center md:flex-row md:bg-transparent md:py-0 xs:flex-col xs:py-3">
                                <li ><a href="#hero"><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Home</button></a></li>
                                <li ><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Portofolio</button></li>
                                <li ><a href="#footer"><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >About</button></a></li>
                            </ul>
                        </div>
                        <span className="menuicon material-symbols-outlined text-4xl self-center text-slate-100 justify-self-end button md:relative xs:absolute cursor-pointer" style={{transition: "all 0.5s"}} onClick={setButton}>menu</span>
                    </nav>
                </div>
            </div>
        </section>
    )
};
export default Hiddersatu;
