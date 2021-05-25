import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import BackspaceIcon from '@material-ui/icons/Backspace';
import {auth} from "../../firebase"
const SidebarProfile:React.FC<{pic?:string,id:string,name:string}> = ({pic,id,name}) => {
   let state1:string = 'icon '
   let state2:string ='icon red dontDisplay'
    return (
        <div className="sidebar-profile" >
            <div className="sidebar-profile_info">
             <Avatar src={pic} alt={name}  />
             <div className="user">
                 <h4>{name}</h4>
                 <p>{id.substring(0,5)}</p>
             </div>
             </div>
            <div className="sidebar-profile_icons">
            <div>
                <MicIcon className={state1} />
                <MicOffIcon className={state2} />
            </div>
                <HeadsetIcon className="icon" />
                <BackspaceIcon onClick={()=>auth.signOut()} className="icon" />
            </div>
        </div>
    )
}

export default SidebarProfile 
