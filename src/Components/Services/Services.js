import React from 'react'
import useWebAnimations, { tada,swing } from '@wellyshen/use-web-animations'
import { service1, service2 } from '../../images/images'
import './Services.css'

function Services() {
    const { ref:service1Ref } = useWebAnimations({
        ...tada,
        autoPlay: false,
        timing: {
            ...tada['timing'],
            id: 'service1',
            iterations: 1,
            duration: 2500,
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 4000)
    })

    const { ref:service2Ref } = useWebAnimations({
        ...swing,
        autoPlay: false,
        timing: {
            ...swing['timing'],
            id: 'service2',
            iterations: 1,
            duration: 3000
        },
        onReady: ({ animation }) => setInterval(() => animation.play(), 5000)
    })

    return (
        <div className="container">
            <ServiceBlocks
                img={service1}
                title={`UX Writing`}
                parag={`I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.`}
                rowReverse={''}
                animate={service1Ref}
            />
            <ServiceBlocks
                img={service2}
                title={`Website CopyRight`}
                parag={`Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.`}
                rowReverse={'reverse'}
                animate={service2Ref}
            />
        </div>
    )
}

function ServiceBlocks({img,title,parag,rowReverse,animate}){
    return(
        <div className={`flow--row marg--box ${rowReverse === 'reverse' ? 'reverse' : ''}`}>
            <div className="block--img" ref={animate}>
                <img src={img} alt=""/>
            </div>
            <div className="block--title">
                <h1>{title}</h1>
                <p>{parag}</p>
            </div>
        </div>
    )
}

export default Services
