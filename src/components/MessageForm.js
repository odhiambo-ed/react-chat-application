import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

function MessageForm({ chatId, creds }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping({ chatId, creds });
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };

    return (
        <form className="message-form" onSubmit={handleSendMessage}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
}

export default MessageForm;