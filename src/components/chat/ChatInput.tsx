import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
const ChatInput = () => {
    return (
        <div className = "chatInput">
            <AddCircleIcon />
            <form >
                <input type="text" placeholder={`Message #Channel`} />
                {/* <button type="submit">Send Message</button> */}
            </form>
            <CardGiftcardIcon/>
            <GifIcon className="Gif"/>
            <EmojiEmotionsIcon/>
            
        </div>
    )
}

export default ChatInput
