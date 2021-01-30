import React from 'react'
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6 } from '../../images/images';
import './Review.css'

function Review() {
    const avatars = [ avatar1, avatar2, avatar3, avatar4, avatar5, avatar6 ]

    return (
        <div className="container bg-1 marg--box">
            <h1 className="title--1">Reviews</h1>

            <div className="Reviews">
                {[0,1,2,3,4,5].map(i => (
                    <div className="review--box">    
                        <div className="review--avatar">
                            <img src={avatars[i]} alt=""/>
                        </div>
                        <div className="review--body">
                            <h1>{`John ${i+1}`}</h1>
                            <h2>{`Working Hour ${i+1}`}</h2>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, est."</p>
                        </div>
                        <div className="review--btn">
                            <span>Show Full testimonals</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Review
