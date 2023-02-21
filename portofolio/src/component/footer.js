import Github from "./icon/github";
import Youtube from "./icon/youtube";
// import Linkedintow from "./icon/linkedinTuo";
import Linkedintow from "./icon/linkedintuo";
import { Link } from "react-router-dom";
import "./style/footer.css"

const Footersatu = () => {
    return(
        <section style={{background: '#08090E'}}>
             <div className="grid grid-cols-3 py-10 justify-center mx-auto rows max-w-7xl px-10 sm:grid-cols-3 xs:grid-cols-2">
                <h1 className="pt-14 text-5xl font-medium text-slate-50 tracking-wider sm:text-5xl sm:pt-14 xs:text-2xl xs:pt-3">Gufanto<br/><span className="font-light text-green-600">Dev</span>.</h1>
                <nav className="text-slate-400 w-3/6 mx-auto text-xl tracking-wider my-8 sm:my-8 xs:my-1">
                    <ul className="flex gap-4 flex-col justify-center text-lg sm:gap-4 xs:gap-0  rows">
                        <li><a href="#hero"><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Home</button></a></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Portofolio</button></li>
                        <li><a href="#footer"><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >About</button></a></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Contect</button></li>
                    </ul>
                </nav>
                <menu className="flex flex-col gap-5 my-9 sm:flex-col xs:flex-row">
                    <Link to="https://github.com/newbiners" target="_blank">
                        <Github/>
                    </Link>
                    <Youtube/>
                    <Link to="https://www.linkedin.com/in/gufron-aprilianto-a046b1266/" target="_blank">
                        <Linkedintow/>
                    </Link>
                </menu>
             </div>
        </section>
    )
};
export default Footersatu;