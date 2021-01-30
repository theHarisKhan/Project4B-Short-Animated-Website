import React from 'react'
import { sample0, sample1, sample2, sample3, sample4, sample5, sample6, sample7 } from '../../images/images';
import './Sample.css'

function Sample() {
    const sampleImgs = [ sample0, sample1, sample2, sample3, sample4, sample5, sample6, sample7 ]
    return (
        <div className="container">
            <h1 className="title--1">Samples</h1>
            <h2 className="title--2">Useful UX</h2>

            <div className="samples--box marg--box">
                {[0,1,2].map(i => (
                    <div className="sample--item">
                        <img src={sampleImgs[i]} alt="" className="sample--img"/>
                        <div className="sample--text">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a eius odit ab accusantium odio quasi est adipisci necessitatibus laudantium!</p>
                            <a href="#">See More</a>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="title--2">Digital Copy</h2>

            <div className="samples--box digital--box marg--box">
                {[3,4,5,6,7].map(i => (
                    <div className="sample--item">
                        <img src={sampleImgs[i]} alt="" className="sample--img"/>
                        <div className="sample--text">
                            <h2>Lorem Ipsum</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a eius odit ab accusantium odio quasi est adipisci necessitatibus laudantium!</p>
                            <a href="#">See More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sample
