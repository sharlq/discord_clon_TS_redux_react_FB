import React from 'react'
import SidebarProfile from './SidebarProfile'
import Server from './server/server'

interface Props {
 channel:string;
 channelId:string;
}

const Sidebar = ({}) => {
    return (
        <div className="sidebar">
            <Server/>
            <SidebarProfile/>
        </div>
    )
}



export default Sidebar
