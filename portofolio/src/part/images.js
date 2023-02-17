import React from "react";
import js from '../images/js.png';
import tailwind from '../images/tailwind.png';
import react from '../images/rect.png';
import images from '../images/images-profile.png';
import './style/images.css'


const Images = () => {
    return (
        <div className="images my-auto py-5">
            <div className="imagesTrans">
                <div style={{background: '#038C5A', height: '32rem', width: '25rem', borderRadius: '50rem 50rem 0rem 0rem'}}></div>
                    <img src={js} className="js"/>
                    <img src={react} className="react"/>
                    <img src={tailwind} className="tailwind"/>
                    <img src={images} style={{height: '28rem', position: "absolut", top: '-1rem',transform: "translate(-2rem, -28rem)"}}/>
                    
            </div>
        </div>
    )
};
export default Images;