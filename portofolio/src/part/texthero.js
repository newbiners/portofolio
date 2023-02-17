import Linkedin from "../component/icon/Linkedin";
import Instagram from "../component/icon/Instagram";

const Texthero = () => {
    return(
        <div>
             <div className="mt-28">
                <div className="mb-3">
                            <h1 className="text-2xl text-green-600 mb-2">I'm Gufanto</h1>
                            <h2 className="text-4xl font-semibold mb-7">Junior Front end Devloper from Indonesia</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="text-1xl font-medium px-3 py-2 text-slate-50 bg-green-700 hover:bg-green-900 transition-all rounded-md">Contact Me</button>
                    <Linkedin/>
                    <Instagram/>
                </div>    
            </div>
        </div>
    )
};
export default Texthero;