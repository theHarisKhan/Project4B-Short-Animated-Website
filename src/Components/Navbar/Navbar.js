import React from 'react'
import './Navbar.css'
import { FaBars, FaCaretDown } from 'react-icons/fa'
import useWebAnimations from '@wellyshen/use-web-animations'

function Navbar() {
    const { ref: refA } = useWebAnimations({
        id: 'charA',
        keyframes: {color : ['#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff']},
        timing: {duration: 5000, iterations: Infinity}
    })

    const { ref:refN } = useWebAnimations({
        id: 'charN',
        keyframes: {color : ['#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refI } = useWebAnimations({
        id: 'charI',
        keyframes: {color : ['#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refM } = useWebAnimations({
        id: 'charM',
        keyframes: {color : ['#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refA2 } = useWebAnimations({
        id: 'charA2',
        keyframes: {color : ['#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refT } = useWebAnimations({
        id: 'charT',
        keyframes: {color : ['#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refI2 } = useWebAnimations({
        id: 'charI2',
        keyframes: {color : ['#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refO } = useWebAnimations({
        id: 'charO',
        keyframes: {color : ['#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refN2 } = useWebAnimations({
        id: 'charN2',
        keyframes: {color : ['#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00']},
        timing: {duration: 5000, iterations: Infinity}
    })
    const { ref:refS } = useWebAnimations({
        id: 'charS',
        keyframes: {color : ['#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00']},
        timing: {duration: 5000, iterations: Infinity}
    })

    return (
        <div className='Navbar'>
            <span className='charA' ref={refA}>A</span>
            <span className='charN' ref={refN}>N</span>
            <span className='charI' ref={refI}>I</span>
            <span className='charM' ref={refM}>M</span>
            <span className='charA' ref={refA2}>A</span>
            <span className='charT' ref={refT}>T</span>
            <span className='charI' ref={refI2}>I</span>
            <span className='charO' ref={refO}>O</span>
            <span className='charN' ref={refN2}>N</span>
            <span className='charS' ref={refS}>S</span>
            <span className="btn"><FaCaretDown /> </span>
            <div className='btn--container'>
                <span className='menuBtn'> <FaBars />  </span>
            </div>
        </div>
    )
}

export default Navbar
