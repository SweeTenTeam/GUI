import React from 'react'
import InputForm from './InputForm';

const ChatWindow: React.FC = () => {
    return (
        <div className='chat-window'>
            <InputForm />
            {/*  message input bar */}
        </div>
    )
}

export default ChatWindow;
