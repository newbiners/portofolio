import Github from "./icon/github";
import Youtube from "./icon/youtube";
// import Linkedintow from "./icon/linkedinTuo";
import Linkedintow from "./icon/linkedintuo";
import { Link } from "react-router-dom";

const Footersatu = () => {
    return(
        <section style={{background: '#08090E'}}>
             <div style={{height: '17rem'}} className="grid grid-cols-3 justify-center mx-14">
                <h1 className="pt-14 text-5xl font-medium text-slate-50 tracking-wider">Gufanto<br/><span className="font-light text-green-600">Dev</span>.</h1>
                <nav className="text-slate-400 w-3/6 mx-auto text-xl tracking-wider my-8">
                    <ul className="flex gap-4 flex-col justify-center text-lg">
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Home</button></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Portofolio</button></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >About</button></li>
                        <li><button className="text-gray-100 transition-all duration-500 hover:text-green-600 focus:outline-0 button" >Contect</button></li>
                    </ul>
                </nav>
                <menu className="flex flex-col gap-5 my-9">
                    <Link to="https://github.com/newbiners" target="_blank">
                        <Github/>
                    </Link>
                    <Youtube/>
                    <Linkedintow/>
                </menu>
             </div>
        </section>
    )
};
export default Footersatu;