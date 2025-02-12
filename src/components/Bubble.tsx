import React from 'react';
import { Message } from '../types';

interface BubbleProps {
    message: Message;
}

const Bubble: React.FC<BubbleProps> = ({ message }) => {
    const formattedDate = new Date(message.date).toLocaleString('en-GB', {
        // day: '2-digit',
        // month: 'short',
        // year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24-hour format
    });

    return (
        <div className={`bubble ${message.isUser ? 'user' : 'system'}`}>
            <div className="bubble-content">
                <p className='content'>{message.content}</p>
                {message.hasFile && <span>📎 Attachment</span>}
            </div>
            <small className='message-date'>{formattedDate}</small>
        </div>
    );
};

export default Bubble;
