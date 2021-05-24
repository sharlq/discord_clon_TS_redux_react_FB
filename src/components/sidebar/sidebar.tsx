import React from 'react'
import SidebarProfile from './SidebarProfile'
import Server from './server/server'
import Connection from './connection'


const Sidebar = ({}) => {
    return (
        <div className="sidebar">
            <Server/>
            <Connection channel={"channel1"} server={"server name"} />
            <SidebarProfile id="#1" name="shehab"/>
        </div>
    )
}



export default Sidebar
