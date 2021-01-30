import React from 'react'
import { avatar } from '../../images/images';
import './About.css'

function About() {
    return (
        <div className="container bg-1">
            <div className="marg--box bg-1--grid">
                <div className="avatar--box">
                    <img src={avatar} alt="" className="avatar"/>
                    <h4 className="name">
                        Lorem Ipsum
                        <span>, dolor sit amet elit</span>
                    </h4>
                </div>
                <div className="about">
                    <h6 className="title">About</h6>
                    <p className="about--para">
                    My copywriting and UX writing draws on abilities developed in the psychological sciences.<br/><br/>
                    Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
