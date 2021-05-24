import ChatHeader from './Chatheader'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader channel="Youtube"/>
            <ChatMessages />
            <ChatInput/>
        </div>
    )
}

export default Chat
