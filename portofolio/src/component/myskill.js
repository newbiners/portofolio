import Ilustrator from "../images/illustrator.png";
import tailwind from "../images/tailwind.png";
import react from "../images/rect.png";
import Js from "../images/js.png"
const Myskill = () => {
    return (
        <section >
            <div style={{background: '#06070A',padding: '0rem 2rem' }} className="py-44 sm:py-44 xs:py-3">
                <h1 className="text-gray-100 px-20 text-center leading-10 font-bold mx-auto pt-24 md:w-7/12 md:text-4xl sm:w-9/12 sm:px-20 sm:pt-16 xs:text-3xl xs:px-2 xs:pt-8" style={{letterSpacing: '3px'}}>My Skill</h1>
                <menu className="max-w-4xl mx-auto py-10 mt-5 flex justify-between items-center md:max-w-4xl md:mt-14 sm:max-w-lg sm:py-10 xs:max-w-xs xs:py-9 ">
                    <img src={Ilustrator} className='h-24 md:h-24 sm:h-16 xs:h-12' style={{ filter: 'grayscale(100%)  brightness(150%) contrast(200%) invert(100%) opacity(50%)'}}/>
                    <img src={tailwind} className="h-24 md:h-24 sm:h-16 xs:h-12" style={{filter:'grayscale(200%)'}}/>
                    <img src={react} className="h-24 md:h-24 sm:h-16 xs:h-12" style={{filter:'grayscale(200%) opacity(70%)'}}/>
                    <img src={Js} className="h-24 md:h-24 sm:h-16 xs:h-12" style={{filter:'grayscale(200%) opacity(70%)'}}/>

                </menu>
            </div>
        </section>
    )
};

export default Myskill;
