import React from "react";
import js from '../images/js.png';
import tailwind from '../images/tailwind.png';
import react from '../images/rect.png';
import images from '../images/images-profile.png';
import './style/images.css';
//import useState
import { useState } from "react";


const Images = () => {
    const [show , setShow] = useState(true);
    const setFixed = () => {
        if(window.scrollY >= 0 && window.scrollY <= 520) {
            setShow(true)

        }else{
            setShow(false)
        }
    };
    window.addEventListener("scroll", setFixed);

    return (
        <div className="images my-auto py-2 mx-auto justify-self-center md:justify-self-center md:px-0 sm:justify-self-end sm:px-24 xs:px-27 ">
            <div className="imagesTrans">
                <div className="bg-height"></div>
                    <img src={js} className={show ? 'hiden': 'hiden1'} alt="js"/>
                    <img src={react} className={show ? 'react':"hiden-2"} alt="react"/>
                    <img src={tailwind} className={show ? 'tailwind':'hiden-3'} alt="tailwind"/>
                    <img src={images} className="profil" alt="profil"/>
                    
            </div>
        </div>
    )
};
export default Images;