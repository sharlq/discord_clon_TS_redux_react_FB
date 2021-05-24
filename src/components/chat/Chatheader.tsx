import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

const Chatheader:React.FC<{channel:string}> = ({channel}) => {
    return (
        <div className="chatHeader">
            <h4><span className="chatHeader_hash">#</span>{channel}</h4>
            <div className="chatHeader_right">
                <NotificationsIcon />
                <LocationOnIcon />
                <PeopleAltIcon />
                <div className="chatHeader_search">
                <input type="search" placeholder="Search"/> 
                <SearchIcon/> 
                </div>
                <SendIcon/>
                <HelpIcon/>
            </div>
        </div>
    )
}

export default Chatheader
