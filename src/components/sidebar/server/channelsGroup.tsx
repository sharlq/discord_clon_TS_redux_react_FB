import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Channel from './channel';
const ChannelsGroup = () => {
    return (
        <div className="channelsGroup">
            <div className="channelsGroup-header"> 
            <div className="channelsGroup-header_title">
            <ExpandMoreIcon className="expand"/> <h5>Text Channel</h5>
            </div>
            <AddIcon className="addIcon"/>
            </div>
            <Channel id="1" channel="Youtube" />
            <Channel id="2" channel="Chat one" />
            <Channel id="1" channel="Chat two" />
        </div>
    )
}

export default ChannelsGroup
