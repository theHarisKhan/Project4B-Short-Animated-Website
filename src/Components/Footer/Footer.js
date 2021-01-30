import React from 'react'
import './Footer.css'
import { waving1, waving2, waving3, waving4, waving5 } from '../../images/images'
import { IconContext } from 'react-icons/lib'
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhotoVideo } from 'react-icons/fa'


function Footer() {
    const wavingAvatars = [ waving1, waving2, waving3, waving4, waving5 ]
    return (
        <div className="container bg-1 Footer">
            <h5 className="footer--title">
                Based in Sydney, Australia. Available worldwide.
            </h5>
            <div className="footer--avatars">
                {[0,1,2,3,4].map(i => (
                    <img src={wavingAvatars[i]} alt="" className="AvatarImg" />
                ))}
            </div>
            <IconContext.Provider value={{color: "white", title: "Contact Us", size: "3rem" }}>
                <div className="socialIcons">
                    <FaPhotoVideo />
                    <FaFacebook />
                    <FaLinkedin />
                </div>
            </IconContext.Provider>

            <div className="msgBlock">
                <img src="https://www.flaticon.com/svg/vstatic/svg/1041/1041916.svg?token=exp=1611918982~hmac=104399f48e980eddafbdef53e0e4600c" alt="" className="msgIcon"/>
            </div>
        </div>
    )
}

export default Footer 
