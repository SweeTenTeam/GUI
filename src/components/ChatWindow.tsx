import React from 'react';
import InputForm from './InputForm';
import Bubble from './Bubble';
import messagesData from '../data/messages.json';

const ChatWindow: React.FC = () => {
    return (
        <div className="chat-window">
            <ul className="message-list">
                {messagesData.map((msg) => (
                    <li key={msg.id} >
                        <Bubble message={{ ...msg, date: new Date(msg.date) }} />
                    </li>
                ))}
            </ul>

            <div>
                <InputForm />
            </div>
        </div>
    );
};

export default ChatWindow;
