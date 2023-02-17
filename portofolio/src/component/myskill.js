import Ilustrator from "../images/illustrator.png";
import tailwind from "../images/tailwind.png";
import react from "../images/rect.png";
import Js from "../images/js.png"

const Myskill = () => {
    return (
        <section >
            <div style={{background: '#06070A', height: '25rem'}}>
                <h1 className="text-gray-100 px-32 py-auto text-3xl text-center leading-10 font-normal w-7/12 mx-auto pt-24">My Skill</h1>
                <menu className="max-w-4xl mx-auto mt-20 flex justify-between items-center">
                    <img src={Ilustrator} className='h-24' style={{filter:'grayscale(200%)'}}/>
                    <img src={tailwind} className="h-24" style={{filter:'grayscale(200%)'}}/>
                    <img src={react} className="h-24" style={{filter:'grayscale(200%)'}}/>
                    <img src={Js} className="h-24" style={{filter:'grayscale(200%)'}}/>

                </menu>
            </div>
        </section>
    )
};

export default Myskill;
