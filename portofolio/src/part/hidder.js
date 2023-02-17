import "./style/hidder.css"

const Hiddersatu = () => {
    const style = {
    }    
    return(
            <div className="flex items-center ">
                <nav className="grid grid-cols-2 justify-between px-2 items-center">
                    <div className="text-2xl font-light">Gufanto<span className="text-green-600">Dev</span></div>
                    <ul className="flex gap-4 text-lg">
                        <li><button className="text-gray-100 hover:text-green-600 focus:outline-0 button" >Home</button></li>
                        <li><button className="text-gray-100 hover:text-green-600 focus:outline-0 button" >Portofolio</button></li>
                        <li><button className="text-gray-100 hover:text-green-600 focus:outline-0 button" >Abot</button></li>
                        <li><button className="text-gray-100 hover:text-green-600 focus:outline-0 button" >Contect</button></li>
                    </ul>
                </nav>
            </div>
    )
};
export default Hiddersatu;
