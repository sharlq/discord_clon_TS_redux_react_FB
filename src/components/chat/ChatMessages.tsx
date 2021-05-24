import React from 'react'
import Message from './message'

const ChatMessages = () => {
    return (
        <div className="chatMessages">
            <Message name='shehab' timeStamp="1/1/2021" content="hi there this is a message"/>
            <Message name='shehab' timeStamp="1/1/2021" content="hi there this is a message"/>
            <Message name='shehab' timeStamp="1/1/2021" content="hi there this is a message"/>
        </div>
    )
}

export default ChatMessages
