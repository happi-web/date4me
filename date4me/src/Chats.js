import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className = "chats">
            <Chat 
            name = "Karen"
            message = "I love you"
            timestamp = "40 sec"
            profilePic = "https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/yousef_040/45/102265_2.png"/>

            <Chat 
            name = "Bibu"
            message = "I love you"
            timestamp = "40 sec"
            profilePic = "https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sujith3021/45/94202_2.png"/>

            <Chat 
            name = "Deborah"
            message = "I love you"
            timestamp = "40 sec"
            profilePic = "https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sujith3021/45/94202_2.png"/>

            <Chat 
            name = "Oddety"
            message = "I love you"
            timestamp = "40 sec"
            profilePic = "https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/sujith3021/45/94202_2.png"/>
        </div>
    );
}

export default Chats;
