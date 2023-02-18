import Ilustrator from "../images/illustrator.png";
import tailwind from "../images/tailwind.png";
import react from "../images/rect.png";
import Js from "../images/js.png"
import style from "./style/myskill.css"
const Myskill = () => {
    return (
        <section >
            <div style={{background: '#06070A', height: '25rem'}}>
                <h1 className="text-gray-100 px-32 py-auto text-3xl text-center leading-10 font-bold w-7/12 mx-auto pt-24" style={{letterSpacing: '3px'}}>My Skill</h1>
                <menu className="max-w-4xl mx-auto mt-20 flex justify-between items-center">
                    <img src={Ilustrator} className='h-24' style={{ filter: 'grayscale(100%)  brightness(150%) contrast(200%) invert(100%) opacity(50%)'}}/>
                    <img src={tailwind} className="h-24" style={{filter:'grayscale(200%)'}}/>
                    <img src={react} className="h-24" style={{filter:'grayscale(200%) opacity(70%)'}}/>
                    <img src={Js} className="h-24" style={{filter:'grayscale(200%) opacity(70%)'}}/>

                </menu>
            </div>
        </section>
    )
};

export default Myskill;
