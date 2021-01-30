import React from 'react'
import { blog1, blog2, blog3, blog4 } from '../../images/images';
import './Blogs.css'

function Blogs() {
    const blogImgs = [blog1,blog2,blog3,blog4]
    return (
        <div className="container">
            <h1 className="title--1">Blogs</h1>
            
            <div className="blogs">
                {[0,1,2,3].map((i) => (
                    <div className="blog--item">
                        <div className="blogBox">
                            <img src={blogImgs[i]} alt="" className="BlogImg"/>
                            <div className="BlogBox--Title">
                                <div className="Shade">
                                    <h4>{`Blog ${i+1}`}</h4>
                                    <h6>Cortex Copywriter</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Blogs
