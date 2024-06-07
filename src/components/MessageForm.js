import React, { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'


function MessageForm({ props }) {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    return (
        <div>
            MessageForm
        </div>
    )
}

export default MessageForm