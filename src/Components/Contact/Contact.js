import React from 'react'
import './Contact.css'
import { FaEnvelope } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Contact() {
    return (
        <div className="container Contact">
            <h5>
                Pick my brain/cortex and let's get<br/><span>started</span> on your project
            </h5>
            <div className="Contact--btn">
                <IconContext.Provider value={{ color:"white", title: "Contact Us", size:"5rem" }}>
                    <FaEnvelope />
                </IconContext.Provider>
                <h6>randommail@mail.com</h6>
            </div>
        </div>
    )
}

export default Contact
