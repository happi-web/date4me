import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {name: "Allen",
        image: "https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/yousef_040/45/102265_2.png",
        message: " Whats up bro!"},

        {name: "Allen",
        image: "https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/yousef_040/45/102265_2.png",
        message: " Whats up bro!"},

        {name: "Allen",
        image: "https://sjc1.discourse-cdn.com/freecodecamp/user_avatar/forum.freecodecamp.org/yousef_040/45/102265_2.png",
        message: " Whats up bro!"},

        {
            message: "Hi bro how are you"
        },
    ]);

    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }
    return (
        <div className= "chatScreen">
            <p className = "chatScreen_timestamp">
                YOU MATCHED WITH ELLEN ON 10/12/2020
            </p>
            {messages.map((message) =>(
                message.name ? (
                <div className = "chatScreen_message">
                    <Avatar 
                    className = "chatScreen_image"
                    alt = {message.name}
                    src = {message.image}/>
                    <p className = "chatScreen_text">{message.message}</p>
                </div>
                ):(
                    <div className = "chatScreen_message">
                        <p className = "chatScreen_textUser">{message.message}</p>
                    </div>
                )
            ))}
                <form className = "chatScreen_input">
                    <input 
                    value = {input}
                    onChange = { (e) => setInput(e.target.value)}
                    className = "chatScreen_inputField"
                    placeholder = "Type a Message"
                    type = "text"/>
                    <button onClick = {handleSend} type = "submit" className = "chatScreen_inputButton">Send</button>
                </form>
        </div>

    )
}

export default ChatScreen;
