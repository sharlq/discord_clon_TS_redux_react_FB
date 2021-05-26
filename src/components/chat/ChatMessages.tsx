import React,{useState,useEffect} from 'react'
import Message from './message'
import db from "../../firebase"
import {useSelector} from "react-redux"
import {selectChannelId} from "../../features/appSlice"
import firebase from 'firebase'
const ChatMessages = () => {
    const [messages,setMessages]=useState<firebase.firestore.DocumentData[]>([])
    const channelId = useSelector(selectChannelId)
    useEffect(()=>{
        if(channelId){
            
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=>doc.data()))
            )
        }
        console.log(messages)
    },[channelId])
    console.log(messages)
    return (
        <div className="chatMessages">
            {
            messages.map((m)=>
            <Message 
            pic={m.user.photo}
            name={m.user.displayName} 
            timeStamp={m.timestamp} 
            content={m.message}/>
            )
            
            }
            
        </div>
    )
}

export default ChatMessages
