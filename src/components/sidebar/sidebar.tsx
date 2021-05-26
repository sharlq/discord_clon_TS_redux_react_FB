import React,{useState,useEffect} from 'react'
import SidebarProfile from './SidebarProfile'
import Server from './server/server'
import Connection from './connection'
import {useSelector} from 'react-redux'
import {selectUser} from  '../../features/userSlice'
import db from '../../firebase'
import firebase from 'firebase'
interface Channel  {
    id: string | null |undefined,
    channel: firebase.firestore.DocumentData
}

const Sidebar = ({}) => {
    const user = useSelector(selectUser);
    const [channels,setChannels] = useState<Channel[]|null|undefined>(null)
    useEffect(()=>{
        db.collection("channels").onSnapshot((snapshot)=>
        setChannels(
            snapshot.docs.map((doc)=>({
                id: doc.id,
                channel: doc.data(),
            })
            )
        )
        )
        console.log(channels)
    },[])
    return (
        <div className="sidebar">
            <Server channels={channels}/>
            <Connection channel={"channel1"} server={"server name"} />
           <SidebarProfile pic={user.photo} id={user.uid} name={user.displayName}/>
        </div>
    )
}



export default Sidebar
