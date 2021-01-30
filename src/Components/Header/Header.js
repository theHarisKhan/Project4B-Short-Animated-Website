import React from 'react'
import { IntroFeatured, IntroFrontLayer, IntroBrain } from '../../images/images'
import './Header.css'
import useWebAnimations from '@wellyshen/use-web-animations'

function Header() {
    const { ref:refBrain } = useWebAnimations({
        id: 'Brain',
        keyframes: {transform: ['translateY(20px)', 'translateY(-20px)']},
        timing: {duration: 2500, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out'}
    })

    const { ref:reffront } = useWebAnimations({
        id: 'frontlayer',
        keyframes: {opacity: [0,1,1]},
        timing: {duration: 1000, iterations: Infinity, direction: 'alternate', easing: 'steps(3,end)'}
    })

    return (
        <div className="container">
            <div className="grid marg--box">
                <div className="left--container">
                    <h1>CORTEX</h1>
                    <h2>COPYRIGHT</h2>
                    <h5>
                    Enhance your communications with psychology-based copywriting and UX writing
                    </h5>
                    <button className="chatBtn">
                        Send a Message
                    </button>
                </div>
                <div className="right--container">
                    <img src={IntroFeatured} alt="" className="featuredImg" />
                    <img src={IntroFrontLayer} alt="" className="frontLayerImg" ref={reffront}/>
                    <img src={IntroBrain} alt="" className="introBrainImg" ref={refBrain} />
                </div>
            </div>
        </div>
    )
}

export default Header
