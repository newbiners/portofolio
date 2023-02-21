import Hidderdua from "../component/hidder";
import MotivateBar from "../component/motifatebar";
import Myskill from "../component/myskill";
import Footersatu from "../component/footer";
import Copyright from "../component/copyright";
import Hiddersatu from "../part/hidder";

import "./style/layerpremier.css"

const Layerpremier = () => {
    return (
        <div>
            <Hiddersatu/>
            <div id="hero">
            <Hidderdua/>
            </div>
                <MotivateBar/>
                <Myskill/>
                <div id="footer">
                    <Footersatu/>
                </div>
                <Copyright/>
        </div>
    )
}
export default Layerpremier;