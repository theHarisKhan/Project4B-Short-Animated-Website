import React from 'react'
import './ChatBot.css'
import useWebAnimations, { tada } from '@wellyshen/use-web-animations';
import { 
    communityAvatar, 
    corporateAvatar, 
    technologyAvatar, 
    luxuryAvatar, 
    entertainmentAvatar 
} from '../../images/images';

function ChatBot() {

    const avatars = [ communityAvatar, corporateAvatar, technologyAvatar, luxuryAvatar, entertainmentAvatar ]
    const avatarTitles = [ 'Community', 'Corporate', 'Technology', 'Luxury', 'Entertainment' ];
    // const avatarRefs = [ communityRef, corporateRef, technologyRef, luxuryRef, entertainmentRef ];
    // const avatarAnims = [ anim0, anim1, anim2, anim3, anim4 ]

    return (
        <div className="container">
            <h1 className="title--1">Select avatars to switch chatbot voice &amp; tone</h1>
            <div className="marg--box bg-2--style">

                <div className="avatars">
                    {[0,1,2,3,4].map((i) => (
                        <div className="avatarBox">
                            <img src={avatars[i]} alt="" className="chatbot--avatar"/>
                            <div className="avatarTitle">
                                {avatarTitles[i]}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ChatBox">
                    <div className="chat">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quaerat!      
                    </div>
                    <div className="chat">
                    Lorem ipsum dolor sit.
                    </div>
                    <div className="chat">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.      
                    </div>
                </div>

                <div className="ChatBox--btns">
                    <button className="btn">Keep Chating!</button>
                    <button className="btn">Get in touch!</button>
                </div>

            </div>
        </div>
    )
}

export default ChatBot
