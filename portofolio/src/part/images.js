import React from "react";
import js from '../images/js.png';
import tailwind from '../images/tailwind.png';
import react from '../images/rect.png';
import images from '../images/images-profile.png';
import './style/images.css';
//import useState
import { useState } from "react";


const Images = () => {
    const [show , setShow] = useState(false);
    let hiden = document.querySelector('hiden')
    const setFixed = () => {
        if(window.scrollY >= 0 && window.scrollY <= 120) {
            setShow(true)

        }else{
            setShow(false)
        }
    };
    window.addEventListener("scroll", setFixed);

    return (
        <div className="images my-auto py-5">
            <div className="imagesTrans">
                <div style={{background: '#038C5A', height: '32rem', width: '25rem', borderRadius: '50rem 50rem 0rem 0rem'}}></div>
                    <img src={js} className={show ? 'hiden': 'hiden1'}/>
                    <img src={react} className={show ? 'react':"hiden-2"}/>
                    <img src={tailwind} className={show ? 'tailwind':'hiden-3'}/>
                    <img src={images} style={{height: '28rem', position: "absolut", top: '-1rem',transform: "translate(-2rem, -28rem)"}}/>
                    
            </div>
        </div>
    )
};
export default Images;